/* Original friendly anime-style student, drawn as SVG. Swap for your own artwork in assets/. */
function Character({ variant = "girl", className = "" }) {
  const hair = variant === "girl" ? "#3b2a8c" : "#1e293b";
  const shirt = variant === "girl" ? "#f472b6" : "#22d3ee";
  return (
    <svg className={`character ${className}`} viewBox="0 0 300 340" role="img" aria-label="Smiling student with a backpack holding books">
      <defs><radialGradient id="glow"><stop offset="0" stopColor="#4da3ff" stopOpacity=".55"/><stop offset="1" stopColor="#4da3ff" stopOpacity="0"/></radialGradient></defs>
      <circle cx="150" cy="170" r="150" fill="url(#glow)"/>
      <rect x="92" y="190" width="116" height="120" rx="40" fill="#e0e7ff"/>
      <path d="M95 215q55 40 110 0v95H95z" fill={shirt}/>
      <rect x="78" y="205" width="26" height="90" rx="13" fill="#facc15"/>
      <circle cx="150" cy="120" r="62" fill="#ffe0c8"/>
      <path d="M86 120q-6-78 64-72 70-6 64 72-14-38-64-40-50 2-64 40z" fill={hair}/>
      {variant === "girl" && <><circle cx="78" cy="102" r="16" fill={hair}/><circle cx="222" cy="102" r="16" fill={hair}/></>}
      <ellipse cx="127" cy="125" rx="9" ry="13" fill="#0d1f45"/><ellipse cx="173" cy="125" rx="9" ry="13" fill="#0d1f45"/>
      <circle cx="130" cy="120" r="3.5" fill="#fff"/><circle cx="176" cy="120" r="3.5" fill="#fff"/>
      <circle cx="112" cy="146" r="9" fill="#fca5a5" opacity=".6"/><circle cx="188" cy="146" r="9" fill="#fca5a5" opacity=".6"/>
      <path d="M136 150q14 14 28 0" stroke="#0d1f45" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <rect x="112" y="236" width="76" height="52" rx="8" fill="#1769ff"/><rect x="120" y="244" width="60" height="6" rx="3" fill="#fff" opacity=".8"/><rect x="120" y="258" width="40" height="6" rx="3" fill="#fff" opacity=".5"/>
      <path d="M118 36l32-14 32 14-32 14z" fill="#0d1f45"/><path d="M182 36v18" stroke="#facc15" strokeWidth="4"/>
    </svg>
  );
}
export default Character;
