import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page, { stagger, rise } from "../components/Page.jsx";
import Character from "../components/Character.jsx";
import Divider from "../components/Divider.jsx";
import ArticleCard from "../components/ArticleCard/ArticleCard.jsx";
import CalendarEvent from "../components/CalendarEvent/CalendarEvent.jsx";
import useCountUp from "../hooks/useCountUp.js";
import { articles } from "../data/articles.js";
import { calendarEvents } from "../data/calendarEvents.js";

const quick = [["bi-journal-text", "Assignments", "/assignments"], ["bi-bullseye", "Online Practice", "/online-practice"], ["bi-people-fill", "Parent Resources", "/parents"], ["bi-folder-fill", "Learning Materials", "/learning-materials"], ["bi-calendar3", "School Calendar", "/calendar"]];
const stats = [[1, "Grades", "0"], [5, "Learning Levels", "0"], [50, "School Events", "+"], [100, "Learning Resources", "+"]];
const subjects = [["bi-book", "English", "Improve reading and vocabulary.", "#4da3ff"], ["bi-123", "Maths", "Build strong mathematical skills.", "#8b5cf6"], ["bi-flask", "Science", "Explore the world around you.", "#34d399"], ["bi-globe-asia-australia", "Social Studies", "Learn about people and communities.", "#facc15"]];

function Stat({ to, label, suffix }) {
  const [ref, v] = useCountUp(to);
  return <div className="glass-card stat" ref={ref}><strong>{String(v).padStart(2, "0")}{suffix === "+" ? "+" : ""}</strong><span>{label}</span></div>;
}
const Grid = ({ children }) => <motion.div className="row g-4" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>{children}</motion.div>;

export default function Home() {
  return (
    <Page>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Welcome to ABC School</p>
          <h1>Learn.<br />Explore.<br />Grow.</h1>
          <p className="lead-muted">A smart and friendly digital learning space for Grades 1–5.</p>
          <div className="btn-row">
            <Link to="/assignments" className="btn btn-glow">Explore Assignments</Link>
            <Link to="/learning-materials" className="btn btn-glass">Learning Materials</Link>
          </div>
        </div>
        <div className="hero-art"><Character /></div>
      </section>

      <h2 className="section-title">Quick access</h2>
      <Grid>{quick.map(([ic, t, to]) => (
        <motion.div key={t} className="col-6 col-lg" variants={rise}>
          <Link to={to} className="glass-card quick"><i className={`bi ${ic}`} aria-hidden="true"></i><span>{t}</span></Link>
        </motion.div>))}</Grid>
      <Divider />

      <h2 className="section-title">Learning stats</h2>
      <div className="row g-4">{stats.map(([n, l, s]) => <div key={l} className="col-6 col-lg-3"><Stat to={n} label={l} suffix={s} /></div>)}</div>
      <Divider />

      <h2 className="section-title">Popular subjects</h2>
      <Grid>{subjects.map(([ic, t, d, c]) => (
        <motion.div key={t} className="col-sm-6 col-lg-3" variants={rise}>
          <div className="glass-card subject" style={{ "--c": c }}><i className={`bi ${ic}`} aria-hidden="true"></i><h3>{t}</h3><p className="muted">{d}</p></div>
        </motion.div>))}</Grid>
      <Divider />

      <h2 className="section-title">Upcoming events</h2>
      <Grid>{calendarEvents.slice(1, 4).map((e) => <div key={e.date} className="col-md-6 col-lg-4"><CalendarEvent event={e} /></div>)}</Grid>

      <h2 className="section-title">Parent resources</h2>
      <Grid>{articles.map((a) => <div key={a.id} className="col-md-6 col-lg-4"><ArticleCard article={a} /></div>)}</Grid>

      <section className="glass-card cta">
        <h2>Ready to start learning?</h2>
        <p className="muted">Sign in to see your homework, practice and materials.</p>
        <Link to="/login" className="btn btn-glow">Login to portal</Link>
      </section>
    </Page>
  );
}
