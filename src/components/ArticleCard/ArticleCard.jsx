import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { rise } from "../Page.jsx";
function ArticleCard({ article }) {
  return (
    <motion.article className="glass-card article-card" variants={rise}>
      <div className="art-img" style={{ background: `linear-gradient(135deg,${article.hue},#050b1f)` }} role="img" aria-label={`${article.title} illustration`}>
        <i className={`bi ${article.icon}`}></i>
      </div>
      <div className="art-body">
        <h3>{article.title}</h3>
        <p className="muted">{article.summary}</p>
        <p className="muted small">{article.date}</p>
        <Link to={`/parents/${article.id}`} className="read-link">Read Article <i className="bi bi-arrow-right"></i></Link>
      </div>
    </motion.article>
  );
}
export default ArticleCard;
