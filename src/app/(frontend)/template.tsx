"use client";

import { motion } from "framer-motion";

const fadeUpVariant = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeUpVariant} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}
