import { z } from "zod";

export const briefSchema = z.object({
  pieceType: z.string().min(1, "Pick what kind of piece you want."),
  title: z
    .string()
    .min(8, "Give it a one-line description (8+ chars).")
    .max(120, "Keep it under 120 characters."),
  description: z
    .string()
    .min(60, "Give us at least a few sentences (60+ chars).")
    .max(4000, "Keep the brief under 4000 characters."),
  references: z.string().max(2000).optional(),
  size: z.string().min(1, "Pick a size or note custom measurements."),
  budget: z.string().min(1, "Pick a budget range."),
  timeline: z.string().min(1, "Pick a timeline."),
  city: z.string().min(2, "Where are you shipping to?").max(120),
  email: z.string().email("We need a valid email to send pitches.").max(254),
  handle: z.string().max(60).optional(),
});

export type BriefInput = z.infer<typeof briefSchema>;

export const applicationSchema = z.object({
  name: z.string().min(2, "Your name.").max(120),
  brand: z.string().max(120).optional(),
  email: z.string().email("Valid email please.").max(254),
  city: z.string().min(2, "Where are you based?").max(120),
  instagram: z
    .string()
    .min(2, "We need somewhere to see your work.")
    .max(120),
  website: z.string().max(500).optional(),
  disciplines: z.string().min(1, "Pick what you make most."),
  scale: z.string().min(1, "Pick your scale."),
  turnaround: z.string().min(1, "Typical turnaround?"),
  rate: z.string().min(2, "Give us a starting rate or range.").max(120),
  pitch: z
    .string()
    .min(80, "Tell us what makes your work yours (80+ chars).")
    .max(2000),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export type SubmitResult<T extends string = string> =
  | { ok: true; id: T }
  | { ok: false; error: string };
