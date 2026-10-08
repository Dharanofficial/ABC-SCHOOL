import { motion } from "framer-motion";
import Page, { stagger, rise } from "../components/Page.jsx";
import { practice } from "../data/practiceData.js";

export default function OnlinePractice() {
  return (
    <Page eyebrow="Online practice" title="Practise a little every day.">
      <motion.div className="row g-4" variants={stagger} initial="hidden" animate="show">
        {practice.map((p) => (
          <motion.div key={p.id} className="col-md-6 col-lg-3" variants={rise}>
            <article className="glass-card practice">
              <i className={`bi ${p.icon}`} aria-hidden="true"></i>
              <h2 className="h4">{p.subject}</h2>
              <p className="muted">{p.questions} Questions · {p.level}</p>
              <div className="progress-wrap">
                <div className="d-flex justify-content-between small"><span>Progress</span><span>{p.progress}%</span></div>
                <div className="bar" role="progressbar" aria-valuenow={p.progress} aria-valuemin="0" aria-valuemax="100" aria-label={`${p.subject} progress`}>
                  <motion.span initial={{ width: 0 }} animate={{ width: `${p.progress}%` }} transition={{ duration: 1, delay: 0.3 }} />
                </div>
              </div>
              <button className="btn btn-glow btn-sm">Start Practice</button>
            </article>
          </motion.div>
        ))}
      </motion.div>
    </Page>
  );
}
