export function DashedGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden xl:block"
      aria-hidden
    >
      <div className="notebook-x absolute top-0 left-1/2 h-full w-[90%] -translate-x-1/2" />
      <div className="notebook-x absolute top-0 left-1/2 h-full w-[70%] -translate-x-1/2" />
    </div>
  );
}

