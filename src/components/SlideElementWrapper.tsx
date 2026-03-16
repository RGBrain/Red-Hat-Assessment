"use client";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
export default function SlideElementWrapper({
  children,
  twClasses = "",
  slideFrom,
  duration = "1.1",
}) {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  let x = 0;
  let y = 0;

  if (isLg) {
    switch (slideFrom) {
      case "right":
        x = 470;
        y = 0;
        break;
      case "left":
        x = -470;
        y = 0;
        break;
      case "top":
        x = 0;
        y = -600;
        break;
      case "bottom":
        x = 0;
        y = 350;
        break;
      case "bottomRight":
        x = 450;
        y = 250;
        break;
      case "bottomLeft":
        x = -450;
        y = 250;
        break;

      default:
        x = 0;
        y = 0;
        break;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration, ease: "easeOut" }}
      viewport={{ once: true }}
      className={twClasses}
    >
      {children}
    </motion.div>
  );
}
