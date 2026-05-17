import { cn } from "@/lib/cn";

type LabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
  step?: string;
  hint?: string;
};

export function FieldLabel({ children, htmlFor, step, hint }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block">
      <div className="flex items-baseline justify-between gap-3">
        <span className="flex items-baseline gap-3">
          {step && (
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
              {step}
            </span>
          )}
          <span className="font-display text-[20px] font-medium tracking-[-0.01em] md:text-[24px]">
            {children}
          </span>
        </span>
      </div>
      {hint && (
        <p className="mt-1.5 max-w-xl font-sans text-[14px] leading-relaxed text-muted">
          {hint}
        </p>
      )}
    </label>
  );
}

type FieldProps = {
  children: React.ReactNode;
  error?: string;
  className?: string;
};

export function FieldGroup({ children, error, className }: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {children}
      {error && (
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-signal">
          ⚠ {error}
        </p>
      )}
    </div>
  );
}

const inputBase =
  "block w-full border border-ink/15 bg-paper px-4 py-3.5 font-sans text-[16px] text-ink placeholder:text-muted/70 focus:border-ink focus:outline-none transition-colors";

export const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={cn(inputBase, className)} {...props} />
);

export const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={cn(inputBase, "min-h-[140px] resize-y leading-relaxed", className)}
    {...props}
  />
);

type ChipChoiceProps = {
  options: string[];
  value: string | undefined;
  onChange: (v: string) => void;
  name: string;
};

export function ChipChoice({ options, value, onChange, name }: ChipChoiceProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const selected = value === o;
        return (
          <button
            key={o}
            type="button"
            name={name}
            onClick={() => onChange(o)}
            className={cn(
              "border px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors",
              selected
                ? "border-ink bg-ink text-paper"
                : "border-ink/20 bg-paper text-ink hover:border-ink"
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
