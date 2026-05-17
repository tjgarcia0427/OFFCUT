type Props = {
  items: string[];
  inverted?: boolean;
};

export function Ticker({ items, inverted = false }: Props) {
  const doubled = [...items, ...items];
  return (
    <div
      className={
        inverted
          ? "overflow-hidden border-y border-line bg-ink py-3 text-paper"
          : "overflow-hidden border-y border-line bg-paper py-3 text-ink"
      }
    >
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.18em]">
        {doubled.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span className={inverted ? "text-signal" : "text-signal"}>✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}
