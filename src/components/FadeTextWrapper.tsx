"use client";

import { motion } from "framer-motion";

const fadeUpVariant = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.0,
    },
  },
};

export default function FadeTextWrapper({
  children,
  twClasses = "",
}: {
  children: React.ReactNode;
  twClasses?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.3, ease: "easeOut" }}
      viewport={{ once: true }}
      className={twClasses}
    >
      {children}
    </motion.div>
  );
}
