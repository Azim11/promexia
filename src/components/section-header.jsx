export default function SectionHeader({ subtitle, title, description, centered = true }) {
  const words = typeof title === "string" ? title.split(" ") : [];
  const lastWord = words.slice(-1).join(" ");
  const rest = words.slice(0, -1).join(" ");

  return (
    <div className={`mb-16 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      {subtitle && (
        <div className="badge-green mb-5 inline-flex">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          {subtitle}
        </div>
      )}

      <h2 className="text-3xl font-heading font-black tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.08]">
        {rest}{" "}
        <span className="text-gradient font-black">{lastWord}</span>
      </h2>

      {description && (
        <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted font-medium">
          {description}
        </p>
      )}

      <div className={`mt-7 flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
        <div className="h-px w-8 bg-border" />
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <div className="h-1 w-14 rounded-full bg-gradient-to-r from-primary to-accent" />
        <div className="h-2 w-2 rounded-full bg-accent/50" />
        <div className="h-px w-8 bg-border" />
      </div>
    </div>
  );
}
