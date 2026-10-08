import { Link, useParams } from "react-router-dom";
import Page from "../components/Page.jsx";
import NotFound from "./NotFound.jsx";
import { articles } from "../data/articles.js";

export default function ArticleDetails() {
  const { id } = useParams();
  const a = articles.find((x) => x.id === id);
  if (!a) return <NotFound />;
  return (
    <Page>
      <article className="article">
        <div className="art-hero" style={{ background: `linear-gradient(135deg,${a.hue},#050b1f)` }} role="img" aria-label={`${a.title} illustration`}><i className={`bi ${a.icon}`}></i></div>
        <h1>{a.title}</h1>
        <p className="muted">Published {a.date}</p>
        {a.body.map((p) => <p key={p}>{p}</p>)}
        <blockquote className="quote">{a.quote}</blockquote>
        <div className="highlight"><i className="bi bi-lightbulb-fill"></i> {a.highlight}</div>
        <h2>Practical tips</h2><ul>{a.tips.map((t) => <li key={t}>{t}</li>)}</ul>
        <h2>Resources</h2><ul>{a.resources.map((t) => <li key={t}>{t}</li>)}</ul>
        <Link to="/parents" className="read-link"><i className="bi bi-arrow-left"></i> Back to Blog</Link>
      </article>
    </Page>
  );
}
