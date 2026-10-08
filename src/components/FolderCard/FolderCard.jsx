import { useState } from "react";
import { motion } from "framer-motion";
import { rise } from "../Page.jsx";
function FolderCard({ folder }) {
  const [sel, setSel] = useState(false);
  return (
    <motion.article className="glass-card folder-card" variants={rise} style={{ "--c": folder.color }}>
      <label className="check"><input type="checkbox" checked={sel} onChange={(e) => setSel(e.target.checked)} /> <span className="visually-hidden">Select {folder.name}</span></label>
      <div className="folder-icon"><i className="bi bi-folder-fill closed"></i><i className="bi bi-folder2-open opened"></i></div>
      <h3>{folder.name.toUpperCase()}</h3>
      <p className="muted">{folder.count} Resources</p>
      <p className="muted small">Updated: {folder.updated}</p>
      <button className="btn btn-ghost btn-sm">Open Folder</button>
    </motion.article>
  );
}
export default FolderCard;
