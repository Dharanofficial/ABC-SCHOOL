const bits = ["✦", "☁", "✏️", "📚", "🪐", "⭐"];
function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      {bits.map((b, i) => <span key={i} style={{ left: `${8 + i * 17}%`, top: `${12 + ((i * 29) % 70)}%`, animationDuration: `${6 + i}s`, animationDelay: `${-i}s` }}>{b}</span>)}
    </div>
  );
}
export default Backdrop;
