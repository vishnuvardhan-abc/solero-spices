import { cn } from "@/lib/utils";

/** A heritage-inspired ornamental divider with a central spice motif. */
export function OrnamentDivider({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "cream";
}) {
  const line =
    tone === "gold"
      ? "from-transparent via-gold/50 to-transparent"
      : "from-transparent via-cream/30 to-transparent";
  const dot = tone === "gold" ? "text-gold" : "text-cream";
  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <span className={cn("h-px w-16 bg-gradient-to-r sm:w-24", line)} />
      <svg viewBox="0 0 24 24" className={cn("h-4 w-4 shrink-0", dot)} fill="currentColor" aria-hidden>
        <path d="M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z" />
      </svg>
      <span className={cn("h-px w-16 bg-gradient-to-r sm:w-24", line)} />
    </div>
  );
}

/** A faint mandala motif anchored to a corner of a section. */
export function CornerMandala({
  className,
  position = "tr",
}: {
  className?: string;
  position?: "tr" | "tl" | "br" | "bl";
}) {
  const pos = {
    tr: "right-0 top-0",
    tl: "left-0 top-0",
    br: "right-0 bottom-0",
    bl: "left-0 bottom-0",
  }[position];
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute pattern-mandala opacity-[0.07]",
        "h-64 w-64",
        pos,
        className,
      )}
    />
  );
}
