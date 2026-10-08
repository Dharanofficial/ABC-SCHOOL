import { motion } from "framer-motion";
import Page, { stagger } from "../components/Page.jsx";
import ArticleCard from "../components/ArticleCard/ArticleCard.jsx";
import { articles } from "../data/articles.js";
export default function Parents() {
  return (
    <Page eyebrow="For parents" title="Helping children learn, grow and feel supported.">
      <motion.div className="row g-4" variants={stagger} initial="hidden" animate="show">
        {articles.map((a) => <div key={a.id} className="col-md-6 col-lg-4"><ArticleCard article={a} /></div>)}
      </motion.div>
    </Page>
  );
}
