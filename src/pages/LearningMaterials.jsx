import { motion } from "framer-motion";
import Page, { stagger } from "../components/Page.jsx";
import FolderCard from "../components/FolderCard/FolderCard.jsx";
import { folders } from "../data/learningMaterials.js";
export default function LearningMaterials() {
  return (
    <Page eyebrow="Learning materials" title="Worksheets and notes, by subject.">
      <motion.div className="row g-4" variants={stagger} initial="hidden" animate="show">
        {folders.map((f) => <div key={f.id} className="col-sm-6 col-lg-3"><FolderCard folder={f} /></div>)}
      </motion.div>
    </Page>
  );
}
