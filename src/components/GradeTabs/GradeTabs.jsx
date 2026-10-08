function GradeTabs({ grades, value, onChange }) {
  return (
    <div className="grade-tabs" role="tablist" aria-label="Choose grade">
      {grades.map((g) => (
        <button key={g} role="tab" aria-selected={g === value} className={`grade-tab ${g === value ? "on" : ""}`} onClick={() => onChange(g)}>Grade {g}</button>
      ))}
    </div>
  );
}
export default GradeTabs;
