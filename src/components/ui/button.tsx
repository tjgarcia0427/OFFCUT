import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "outline";

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-signal hover:text-ink border border-ink",
  ghost:
    "bg-transparent text-ink hover:bg-ink hover:text-paper border border-ink",
  outline:
    "bg-paper text-ink hover:bg-ink hover:text-paper border border-ink",
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className,
  arrow = false,
  disabled,
  onClick,
}: Props) {
  const base = cn(
    "group inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors duration-150",
    "disabled:opacity-40 disabled:cursor-not-allowed",
    variants[variant],
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={14}
          strokeWidth={2.25}
          className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={base}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={base} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
