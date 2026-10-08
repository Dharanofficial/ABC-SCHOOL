import { motion } from "framer-motion";
export const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
export const rise = { hidden: { opacity: 0, y: 24, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } } };

function Page({ eyebrow, title, children }) {
  return (
    <motion.div className="container page" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.5 }}>
      {title && (
        <header className="page-head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
        </header>
      )}
      {children}
    </motion.div>
  );
}
export default Page;
