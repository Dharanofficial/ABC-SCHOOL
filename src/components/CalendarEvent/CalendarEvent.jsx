import { motion } from "framer-motion";
import { rise } from "../Page.jsx";
import { EVENT_TYPES } from "../../data/calendarEvents.js";
function CalendarEvent({ event }) {
  const d = new Date(event.date + "T00:00:00");
  return (
    <motion.article className="glass-card event-card" variants={rise} style={{ "--c": EVENT_TYPES[event.type] }}>
      <p className="event-date"><i className="bi bi-calendar-event" aria-hidden="true"></i> {d.toLocaleDateString("en-IN", { month: "long", day: "numeric" })}</p>
      <h3>{event.title}</h3>
      <span className="tag">{event.type}</span>
      <p className="muted">{event.text}</p>
      <button className="btn btn-ghost btn-sm">View Details</button>
    </motion.article>
  );
}
export default CalendarEvent;
