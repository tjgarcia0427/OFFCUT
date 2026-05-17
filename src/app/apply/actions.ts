"use server";

import {
  applicationSchema,
  type ApplicationInput,
  type SubmitResult,
} from "@/lib/schemas";
import { supabase } from "@/lib/supabase";
import { sendApplicationNotification } from "@/lib/mail";

export async function submitApplication(
  input: ApplicationInput
): Promise<SubmitResult> {
  const parsed = applicationSchema.safeParse(input);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return { ok: false, error: first?.message ?? "Invalid application." };
  }
  const data = parsed.data;

  const insert = await supabase()
    .from("applications")
    .insert({
      name: data.name,
      brand: data.brand ?? null,
      email: data.email,
      city: data.city,
      instagram: data.instagram,
      website: data.website ?? null,
      disciplines: data.disciplines,
      scale: data.scale,
      turnaround: data.turnaround,
      rate: data.rate,
      pitch: data.pitch,
    })
    .select("id")
    .single();

  if (insert.error || !insert.data) {
    console.error("[application.insert]", insert.error);
    return {
      ok: false,
      error:
        "Couldn't save your application — that's on us. Try again or email hello@joinoffcut.com.",
    };
  }

  const id = insert.data.id as string;

  try {
    await sendApplicationNotification({
      id,
      name: data.name,
      brand: data.brand,
      email: data.email,
      city: data.city,
      instagram: data.instagram,
      website: data.website,
      disciplines: data.disciplines,
      scale: data.scale,
      turnaround: data.turnaround,
      rate: data.rate,
      pitch: data.pitch,
    });
  } catch (e) {
    console.error("[application.email]", e);
  }

  return { ok: true, id };
}
