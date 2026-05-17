"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FieldGroup, FieldLabel, Input, Textarea, ChipChoice } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const PIECE_TYPES = [
  "Top",
  "Outerwear",
  "Bottoms",
  "Denim",
  "Full look",
  "Rework",
  "Accessory",
];

const BUDGETS = [
  "Under $150",
  "$150–$300",
  "$300–$600",
  "$600–$1.2k",
  "$1.2k+",
];

const TIMELINES = ["2–3 weeks", "3–5 weeks", "5–8 weeks", "Flexible"];

const SIZES = ["XS", "S", "M", "L", "XL", "Custom measurements"];

const schema = z.object({
  pieceType: z.string().min(1, "Pick what kind of piece you want."),
  title: z
    .string()
    .min(8, "Give it a one-line description (8+ chars).")
    .max(120, "Keep it under 120 characters."),
  description: z
    .string()
    .min(60, "Give us at least a few sentences (60+ chars)."),
  references: z.string().optional(),
  size: z.string().min(1, "Pick a size or note custom measurements."),
  budget: z.string().min(1, "Pick a budget range."),
  timeline: z.string().min(1, "Pick a timeline."),
  city: z.string().min(2, "Where are you shipping to?"),
  email: z.string().email("We need a valid email to send pitches."),
  handle: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function BriefForm() {
  const [submitted, setSubmitted] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    // eslint-disable-next-line react-hooks/purity -- placeholder id; real id comes from server in event handler context
    const id = `BRF-${String(Date.now()).slice(-3)}`;
    setSubmitted({ id, title: data.title });
  };

  if (submitted) {
    return <Submitted id={submitted.id} title={submitted.title} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-12"
    >
      {/* 01 — Piece type */}
      <FieldGroup error={errors.pieceType?.message}>
        <FieldLabel step="01" hint="Pick the closest match. You can refine in the description.">
          What are we making?
        </FieldLabel>
        <Controller
          control={control}
          name="pieceType"
          render={({ field }) => (
            <ChipChoice
              name="pieceType"
              options={PIECE_TYPES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      {/* 02 — Title */}
      <FieldGroup error={errors.title?.message}>
        <FieldLabel
          step="02"
          htmlFor="title"
          hint="One line. Like a headline. Designers see this first."
        >
          Give it a one-line title.
        </FieldLabel>
        <Input
          id="title"
          placeholder="e.g. Oversized chore coat, raw selvedge denim, no branding"
          {...register("title")}
        />
      </FieldGroup>

      {/* 03 — Description */}
      <FieldGroup error={errors.description?.message}>
        <FieldLabel
          step="03"
          htmlFor="description"
          hint="Fabric, fit, construction, what it should feel like to wear. Reference 2–3 designers or pieces if you have them."
        >
          The brief.
        </FieldLabel>
        <Textarea
          id="description"
          placeholder="Walk us through it. Two paragraphs is plenty."
          {...register("description")}
        />
      </FieldGroup>

      {/* 04 — References */}
      <FieldGroup error={errors.references?.message}>
        <FieldLabel
          step="04"
          htmlFor="references"
          hint="Optional. Drop URLs — Pinterest, Instagram, Grailed, anywhere. One per line."
        >
          Reference links.
        </FieldLabel>
        <Textarea
          id="references"
          className="min-h-[100px] font-mono text-[14px]"
          placeholder={`https://...\nhttps://...`}
          {...register("references")}
        />
      </FieldGroup>

      {/* 05 — Size */}
      <FieldGroup error={errors.size?.message}>
        <FieldLabel step="05" hint="Designers will follow up for measurements if you pick custom.">
          Size.
        </FieldLabel>
        <Controller
          control={control}
          name="size"
          render={({ field }) => (
            <ChipChoice
              name="size"
              options={SIZES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      {/* 06 — Budget */}
      <FieldGroup error={errors.budget?.message}>
        <FieldLabel
          step="06"
          hint="Be honest. Designers price up — too low a budget gets you no pitches."
        >
          Budget.
        </FieldLabel>
        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <ChipChoice
              name="budget"
              options={BUDGETS}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      {/* 07 — Timeline */}
      <FieldGroup error={errors.timeline?.message}>
        <FieldLabel
          step="07"
          hint="Custom takes time. Anything under 2 weeks is a rush job and most designers will pass."
        >
          When do you need it?
        </FieldLabel>
        <Controller
          control={control}
          name="timeline"
          render={({ field }) => (
            <ChipChoice
              name="timeline"
              options={TIMELINES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      {/* 08 — Contact */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <FieldGroup error={errors.city?.message}>
          <FieldLabel step="08" htmlFor="city" hint="City + country is fine.">
            Where to?
          </FieldLabel>
          <Input
            id="city"
            placeholder="Brooklyn, NY"
            {...register("city")}
          />
        </FieldGroup>

        <FieldGroup error={errors.email?.message}>
          <FieldLabel step="09" htmlFor="email" hint="We send pitches here.">
            Email.
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="you@domain.com"
            {...register("email")}
          />
        </FieldGroup>
      </div>

      <FieldGroup error={errors.handle?.message}>
        <FieldLabel step="10" htmlFor="handle" hint="Optional. Helps designers get your vibe.">
          Instagram handle.
        </FieldLabel>
        <Input
          id="handle"
          placeholder="@yourhandle"
          {...register("handle")}
        />
      </FieldGroup>

      {/* Submit */}
      <div className="flex flex-col items-start gap-4 border-t border-line pt-10">
        <p className="font-sans text-[14px] leading-relaxed text-muted">
          Submitting is free. You only pay if you accept a pitch. We hold the
          deposit in escrow until you approve the finished piece.
        </p>
        <Button type="submit" arrow disabled={isSubmitting}>
          {isSubmitting ? "Sending brief…" : "Send brief to designers"}
        </Button>
      </div>
    </form>
  );
}

function Submitted({ id, title }: { id: string; title: string }) {
  return (
    <div className="border border-line bg-paper-2 p-8 md:p-12">
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
        <CheckCircle2 size={16} />
        Brief filed
      </div>
      <h2 className="mt-4 font-display text-[40px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[64px]">
        It&apos;s out to designers.
      </h2>
      <dl className="mt-8 grid grid-cols-1 gap-6 border-y border-line py-6 md:grid-cols-3">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Brief ID
          </dt>
          <dd className="mt-1 font-display text-[24px] font-bold tracking-[-0.02em]">
            {id}
          </dd>
        </div>
        <div className="md:col-span-2">
          <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Title
          </dt>
          <dd className="mt-1 font-display text-[20px] font-semibold leading-tight tracking-[-0.01em]">
            {title}
          </dd>
        </div>
      </dl>
      <ol className="mt-8 space-y-4 font-sans text-[15px] leading-relaxed text-ink-2">
        <li className="flex gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
            01
          </span>
          We&apos;re matching your brief to designers right now.
        </li>
        <li className="flex gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
            02
          </span>
          You&apos;ll see pitches in your inbox within 48 hours.
        </li>
        <li className="flex gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-signal">
            03
          </span>
          Pick a designer. Pay a deposit. They start making.
        </li>
      </ol>
      <div className="mt-10 flex flex-wrap gap-3">
        <Button href="/" variant="outline">
          Back to home
        </Button>
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em] text-ink hover:text-signal"
        >
          What happens next
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  );
}
