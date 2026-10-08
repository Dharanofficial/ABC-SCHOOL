import { motion } from "framer-motion";
import { rise } from "../Page.jsx";
function HomeworkCard({ month, subjects }) {
  return (
    <motion.article className="glass-card hw-card" variants={rise} layout>
      <h3>{month}</h3>
      {subjects.map((s) => (
        <section key={s.key} className="hw-sub" style={{ "--c": s.color }}>
          <h4><i className={`bi ${s.icon}`} aria-hidden="true"></i> {s.key}</h4>
          <ul>{s.items.map((t) => <li key={t}>{t}</li>)}</ul>
        </section>
      ))}
    </motion.article>
  );
}
export default HomeworkCard;
