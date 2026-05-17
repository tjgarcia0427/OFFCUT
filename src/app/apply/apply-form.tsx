"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { FieldGroup, FieldLabel, Input, Textarea, ChipChoice } from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { applicationSchema, type ApplicationInput } from "@/lib/schemas";
import { submitApplication } from "./actions";

const DISCIPLINES = [
  "Outerwear",
  "Denim",
  "Knitwear",
  "Tops / graphics",
  "Bottoms / cut-and-sew",
  "Rework / upcycling",
  "Hand-dye / print",
  "Accessories",
];

const SCALES = [
  "Just me",
  "Me + 1 collaborator",
  "Small studio (3–5)",
  "Established label",
];

const TURNAROUND = [
  "1–2 weeks",
  "3–4 weeks",
  "5–8 weeks",
  "Depends on the piece",
];

type FormValues = ApplicationInput;

export function ApplyForm() {
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(applicationSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    const res = await submitApplication(data);
    if (!res.ok) {
      setServerError(res.error);
      return;
    }
    setSubmitted(data.name.split(" ")[0] ?? data.name);
  };

  if (submitted) {
    return (
      <div className="border border-line bg-paper p-8 md:p-12">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
          <CheckCircle2 size={16} />
          Application received
        </div>
        <h2 className="mt-4 font-display text-[40px] font-bold leading-[0.95] tracking-[-0.025em] md:text-[64px]">
          Got it, {submitted}.
        </h2>
        <p className="mt-5 max-w-xl font-sans text-[16px] leading-relaxed text-ink-2">
          We review every application personally. Expect a real human response
          within a week — usually faster. If we&apos;re a fit, we&apos;ll set up
          a 20-minute call and walk you through onboarding.
        </p>
        <div className="mt-8">
          <Button href="/" variant="outline">
            Back to home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-12"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <FieldGroup error={errors.name?.message}>
          <FieldLabel step="01" htmlFor="name">
            Your name.
          </FieldLabel>
          <Input id="name" placeholder="Mara Okafor" {...register("name")} />
        </FieldGroup>

        <FieldGroup error={errors.brand?.message}>
          <FieldLabel
            step="02"
            htmlFor="brand"
            hint="If you work under a label or studio name."
          >
            Brand / studio.
          </FieldLabel>
          <Input
            id="brand"
            placeholder="Hiraeth Studio (optional)"
            {...register("brand")}
          />
        </FieldGroup>

        <FieldGroup error={errors.email?.message}>
          <FieldLabel step="03" htmlFor="email">
            Email.
          </FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="you@studio.com"
            {...register("email")}
          />
        </FieldGroup>

        <FieldGroup error={errors.city?.message}>
          <FieldLabel step="04" htmlFor="city">
            Where you make.
          </FieldLabel>
          <Input
            id="city"
            placeholder="Brooklyn, NY"
            {...register("city")}
          />
        </FieldGroup>
      </div>

      <FieldGroup error={errors.instagram?.message}>
        <FieldLabel
          step="05"
          htmlFor="instagram"
          hint="This is what gets you in the door. Show us where your best work lives."
        >
          Instagram or portfolio.
        </FieldLabel>
        <Input
          id="instagram"
          placeholder="@yourhandle or url"
          {...register("instagram")}
        />
      </FieldGroup>

      <FieldGroup error={errors.website?.message}>
        <FieldLabel
          step="06"
          htmlFor="website"
          hint="Optional. Personal site, Shopify, Big Cartel — wherever else."
        >
          Other links.
        </FieldLabel>
        <Input
          id="website"
          placeholder="https://..."
          {...register("website")}
        />
      </FieldGroup>

      <FieldGroup error={errors.disciplines?.message}>
        <FieldLabel
          step="07"
          hint="Pick the one you'd put first. You can do more than one — we'll ask later."
        >
          What you make most.
        </FieldLabel>
        <Controller
          control={control}
          name="disciplines"
          render={({ field }) => (
            <ChipChoice
              name="disciplines"
              options={DISCIPLINES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      <FieldGroup error={errors.scale?.message}>
        <FieldLabel step="08" hint="So we know how many briefs to send your way.">
          Your scale.
        </FieldLabel>
        <Controller
          control={control}
          name="scale"
          render={({ field }) => (
            <ChipChoice
              name="scale"
              options={SCALES}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      <FieldGroup error={errors.turnaround?.message}>
        <FieldLabel step="09" hint="From accepted brief to ready-to-ship.">
          Typical turnaround.
        </FieldLabel>
        <Controller
          control={control}
          name="turnaround"
          render={({ field }) => (
            <ChipChoice
              name="turnaround"
              options={TURNAROUND}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </FieldGroup>

      <FieldGroup error={errors.rate?.message}>
        <FieldLabel
          step="10"
          htmlFor="rate"
          hint="Either a starting rate or a typical range. You can override per brief."
        >
          Your starting rate.
        </FieldLabel>
        <Input
          id="rate"
          placeholder="From $220 / piece"
          {...register("rate")}
        />
      </FieldGroup>

      <FieldGroup error={errors.pitch?.message}>
        <FieldLabel
          step="11"
          htmlFor="pitch"
          hint="The 'why you' paragraph. What's distinctive about your work? Who do you make for? What do you refuse to make?"
        >
          Tell us about your work.
        </FieldLabel>
        <Textarea
          id="pitch"
          placeholder="Three sentences is enough. Don't sell. Just describe."
          {...register("pitch")}
        />
      </FieldGroup>

      <div className="flex flex-col items-start gap-4 border-t border-line pt-10">
        <p className="font-sans text-[14px] leading-relaxed text-muted">
          We read every application. If we&apos;re a fit, we set up a
          20-minute call and walk you through onboarding. Most decisions
          within a week.
        </p>
        {serverError && (
          <p className="border border-signal/40 bg-signal/10 px-4 py-3 font-mono text-[12px] uppercase tracking-[0.1em] text-signal">
            ⚠ {serverError}
          </p>
        )}
        <Button type="submit" arrow disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Send application"}
        </Button>
      </div>
    </form>
  );
}
