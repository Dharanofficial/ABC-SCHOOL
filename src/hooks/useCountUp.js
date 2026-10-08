import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
export default function useCountUp(to, duration = 1.4) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, duration]);
  return [ref, v];
}
