import { useState } from "react";
import { motion } from "framer-motion";
import Character from "../components/Character.jsx";

export default function Login() {
  const [f, setF] = useState({ role: "Student", name: "", pw: "" });
  const [show, setShow] = useState(false);
  const [err, setErr] = useState({});
  const [ok, setOk] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (f.name.trim().length < 2) x.name = "Enter your full name.";
    if (f.pw.length < 6) x.pw = "Password must be at least 6 characters.";
    setErr(x); setOk(Object.keys(x).length ? "" : `Welcome back, ${f.name.trim()}!`);
  };
  return (
    <motion.div className="login-screen" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Character variant="boy" className="login-art" />
      <form className="glass-card login-card" onSubmit={submit} noValidate>
        <i className="bi bi-mortarboard-fill big" aria-hidden="true"></i>
        <h1 className="h3">ABC SCHOOL PORTAL</h1><p className="muted">Welcome back!</p>
        <label htmlFor="role">Role</label>
        <select id="role" className="form-select" value={f.role} onChange={set("role")}><option>Student</option><option>Parent</option><option>Teacher</option></select>
        <label htmlFor="name">Full Name</label>
        <input id="name" className="form-control" placeholder="Enter your name" value={f.name} onChange={set("name")} aria-invalid={!!err.name} aria-describedby="e1" autoComplete="name" />
        <div id="e1" className="err" role="alert">{err.name}</div>
        <label htmlFor="pw">Password</label>
        <div className="pw">
          <input id="pw" className="form-control" type={show ? "text" : "password"} placeholder="•••••••••" value={f.pw} onChange={set("pw")} aria-invalid={!!err.pw} aria-describedby="e2" autoComplete="current-password" />
          <button type="button" className="eye" aria-label={show ? "Hide password" : "Show password"} onClick={() => setShow(!show)}><i className={`bi ${show ? "bi-eye-slash" : "bi-eye"}`}></i></button>
        </div>
        <div id="e2" className="err" role="alert">{err.pw}</div>
        <button className="btn btn-glow w-100 mt-3" type="submit">LOGIN</button>
        <p className="ok" role="status">{ok}</p>
      </form>
    </motion.div>
  );
}
