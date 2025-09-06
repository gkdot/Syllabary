import { motion } from "framer-motion";

export default function FloatingCard({
  children,
  className = "",
  style = {},
}: any) {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`card-neumo absolute ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
