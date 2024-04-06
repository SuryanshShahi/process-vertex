import { Variants } from "framer-motion";

export const HeroVariants: { [x: string]: Variants } = {
  STACKING_CARD: {
    hidden: {
      opacity: 0,
      scaleX:
        typeof window !== "undefined" && window?.innerWidth > 1280 ? 1.2 : 1,
      position: "relative",
    },
    show: {
      opacity: 1,
      scaleX: 1,
      position: "relative",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },
  CARD: {
    hidden: {
      opacity: 0,
      top: 200,
      position: "relative",
    },
    show: {
      opacity: 1,
      top: 0,
      position: "relative",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },
  CARD1: {
    hidden: {
      opacity: 0,
      top: -200,
      position: "relative",
    },
    show: {
      opacity: 1,
      top: 0,
      position: "relative",
      transition: { duration: 0.5, staggerChildren: 0.5 },
    },
  },
  LEFT: {
    hidden: {
      opacity: 0,
      left: -200,
      position: "relative",
    },
    show: {
      opacity: 1,
      left: 0,
      position: "relative",
      transition: { duration: 0.3, staggerChildren: 0.5 },
    },
  },
  RIGHT: {
    hidden: {
      opacity: 0,
      right: -200,
      position: "relative",
    },
    show: {
      opacity: 1,
      right: 0,
      position: "relative",
      transition: { duration: 0.3, staggerChildren: 0.5 },
    },
  },
  PROGRESS: {
    hidden: {
      opacity: 0,
      width: "0%",
      position: "relative",
    },
    show: {
      opacity: 1,
      width: "75%",
      position: "relative",
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  },
  NO_MORE: {
    hidden: {
      opacity: 0,
      top: -300,
      position: "relative",
    },
    show: {
      opacity: 1,
      top: 0,
      position: "relative",
      transition: { duration: 1, staggerChildren: 0.5 },
    },
  },

  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};
