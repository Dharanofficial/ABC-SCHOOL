import { useState } from "react";
import { motion } from "framer-motion";
import { calendarEvents, EVENT_TYPES } from "../../data/calendarEvents.js";
import CalendarEvent from "../CalendarEvent/CalendarEvent.jsx";
import { stagger } from "../Page.jsx";

const pad = (n) => String(n).padStart(2, "0");
function Calendar() {
  const now = new Date();
  const [y, setY] = useState(2026), [m, setM] = useState(9);
  const move = (d) => { const n = new Date(y, m + d, 1); setY(n.getFullYear()); setM(n.getMonth()); };
  const first = new Date(y, m, 1).getDay(), count = new Date(y, m + 1, 0).getDate();
  const key = (d) => `${y}-${pad(m + 1)}-${pad(d)}`;
  const monthEvents = calendarEvents.filter((e) => e.date.startsWith(`${y}-${pad(m + 1)}`));
  const cells = [...Array(first).fill(null), ...Array.from({ length: count }, (_, i) => i + 1)];
  return (
    <>
      <section className="glass-card cal" aria-label="School calendar">
        <div className="cal-head">
          <button className="btn btn-ghost" onClick={() => move(-1)}><i className="bi bi-arrow-left"></i> Prev</button>
          <h2 aria-live="polite">{new Date(y, m).toLocaleString("en-US", { month: "long", year: "numeric" })}</h2>
          <button className="btn btn-ghost" onClick={() => move(1)}>Next <i className="bi bi-arrow-right"></i></button>
        </div>
        <div className="cal-grid dow">{["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => <div key={d}>{d}</div>)}</div>
        <div className="cal-grid">
          {cells.map((d, i) => {
            if (!d) return <div key={i} className="cell blank" />;
            const ev = monthEvents.find((e) => e.date === key(d));
            const wk = [0, 6].includes(new Date(y, m, d).getDay());
            const today = now.getFullYear() === y && now.getMonth() === m && now.getDate() === d;
            return (
              <div key={i} className={`cell ${wk ? "weekend" : ""} ${ev?.type === "holiday" ? "holiday" : ""} ${today ? "today" : ""}`} title={ev?.title}>
                <span className="num">{d}</span>
                {ev && <span className="dot" style={{ background: EVENT_TYPES[ev.type] }}><span className="visually-hidden">{ev.title}</span></span>}
              </div>
            );
          })}
        </div>
        <div className="legend">{Object.entries(EVENT_TYPES).map(([k, c]) => <span key={k}><i style={{ background: c }}></i>{k}</span>)}</div>
      </section>
      <h2 className="section-title">Upcoming school events</h2>
      <motion.div key={`${y}-${m}`} className="row g-4" variants={stagger} initial="hidden" animate="show">
        {monthEvents.length ? monthEvents.map((e) => <div key={e.date} className="col-md-6 col-lg-4"><CalendarEvent event={e} /></div>) : <p className="muted">No events this month.</p>}
      </motion.div>
    </>
  );
}
export default Calendar;
