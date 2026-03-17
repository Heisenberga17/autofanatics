interface SectionDividerProps {
  direction?: "left" | "right";
  fillColor?: string;
  className?: string;
}

export default function SectionDivider({
  direction = "left",
  fillColor = "#0a0a0a",
  className = "",
}: SectionDividerProps) {
  const points =
    direction === "left"
      ? "0,0 100,40 100,0"
      : "0,40 100,0 0,0";

  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="block h-[40px] w-full md:h-[60px]"
      >
        <polygon points={points} fill={fillColor} />
      </svg>
    </div>
  );
}
