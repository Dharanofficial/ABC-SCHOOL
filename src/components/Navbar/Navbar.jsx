import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const links = [["/", "Home"], ["/assignments", "Assignments"], ["/online-practice", "Online Practice"], ["/parents", "Info for Parents"], ["/learning-materials", "Learning Materials"]];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [more, setMore] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setOpen(false); setMore(false); }, [pathname]);

  return (
    <header className={`site-nav ${scrolled ? "scrolled" : ""}`}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="container nav-inner">
        <Link to="/" className="brand"><i className="bi bi-mortarboard-fill" aria-hidden="true"></i><span>ABC SCHOOL</span></Link>
        <span className="grade-badge">Grade 1–5</span>
        <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main">
          {links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"} className="nav-item-link">{label}</NavLink>)}
          <div className="more">
            <button className="nav-item-link" aria-expanded={more} aria-haspopup="true" onClick={() => setMore(!more)}>More <i className="bi bi-chevron-down"></i></button>
            {more && (
              <div className="more-menu">
                <NavLink to="/calendar">Calendar</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <a href="mailto:info@abcschool.edu">Email</a>
              </div>
            )}
          </div>
          <Link to="/login" className="btn btn-glow btn-sm login-link">Login</Link>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
