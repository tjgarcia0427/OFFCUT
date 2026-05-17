"use server";

import { briefSchema, type BriefInput, type SubmitResult } from "@/lib/schemas";
import { supabase } from "@/lib/supabase";
import { sendBriefNotification } from "@/lib/mail";

export async function submitBrief(input: BriefInput): Promise<SubmitResult> {
  const parsed = briefSchema.safeParse(input);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { ok: false, error: first?.message ?? "Invalid brief." };
  }
  const data = parsed.data;

  const insert = await supabase()
    .from("briefs")
    .insert({
      piece_type: data.pieceType,
      title: data.title,
      description: data.description,
      reference_links: data.references ?? null,
      size: data.size,
      budget: data.budget,
      timeline: data.timeline,
      city: data.city,
      email: data.email,
      handle: data.handle ?? null,
    })
    .select("id")
    .single();

  if (insert.error || !insert.data) {
    console.error("[brief.insert]", insert.error);
    return {
      ok: false,
      error:
        "Couldn't save your brief — that's on us. Try again in a minute or email hello@joinoffcut.com.",
    };
  }

  const id = insert.data.id as string;

  // Email is best-effort. Don't block the submission if Resend hiccups.
  try {
    await sendBriefNotification({
      id,
      title: data.title,
      pieceType: data.pieceType,
      description: data.description,
      references: data.references,
      size: data.size,
      budget: data.budget,
      timeline: data.timeline,
      city: data.city,
      email: data.email,
      handle: data.handle,
    });
  } catch (e) {
    console.error("[brief.email]", e);
  }

  return { ok: true, id };
}
