import { ReactNode, HTMLAttributes } from "react";
import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0, ...rest }) {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
