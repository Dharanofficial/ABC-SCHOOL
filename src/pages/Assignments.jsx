import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Page, { stagger } from "../components/Page.jsx";
import GradeTabs from "../components/GradeTabs/GradeTabs.jsx";
import HomeworkCard from "../components/HomeworkCard/HomeworkCard.jsx";
import { assignments, GRADES } from "../data/assignments.js";

export default function Assignments() {
  const [grade, setGrade] = useState(1);
  const list = assignments.filter((a) => a.grade === grade);
  return (
    <Page eyebrow="Monthly assignments" title="Choose your grade and explore your homework.">
      <GradeTabs grades={GRADES} value={grade} onChange={setGrade} />
      <AnimatePresence mode="wait">
        <motion.div key={grade} className="hw-grid" variants={stagger} initial="hidden" animate="show" exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}>
          {list.map((a) => <HomeworkCard key={a.month} month={a.month} subjects={a.subjects} />)}
        </motion.div>
      </AnimatePresence>
    </Page>
  );
}
