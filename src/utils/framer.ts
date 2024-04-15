import { Variants } from "framer-motion";
const width = typeof window !== "undefined" && window?.innerWidth;
export const HeroVariants: { [x: string]: Variants } = {
  STACKING_CARD: {
    hidden: {
      opacity: 0,
      scaleX:
        typeof window !== "undefined" && window?.innerWidth > 1280 ? 1.2 : 1,
    },
    show: (prop?: any) => ({
      opacity: 1,
      scaleX: 1,
      transition: {
        delay: prop?.delay && 0.05 * prop?.delay,
        duration: prop?.duration || 0.5,
      },
    }),
  },
  CARD: {
    hidden: {
      opacity: 0,
      y: 200,
      position: "relative",
    },
    show: (prop?: any) => ({
      opacity: 1,
      y: 0,
      position: "relative",
      transition: {
        delay: prop?.delay && 0.05 * prop?.delay,
        duration: prop?.duration || 0.3,
      },
    }),
  },
  CARD1: {
    hidden: {
      opacity: 0,
      y: -200,
      position: "relative",
    },
    show: (prop?: any) => ({
      opacity: 1,
      y: 0,
      position: "relative",
      transition: {
        delay: prop?.delay && 0.05 * prop?.delay,
        duration: prop?.duration || 0.3,
      },
    }),
  },
  LEFT: {
    hidden: {
      opacity: 0,
      x: -200,
    },
    show: (prop?: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: prop?.delay && 0.05 * prop?.delay,
        duration: prop?.duration || 0.2,
      },
    }),
  },
  RIGHT: {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: (prop?: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: prop?.delay && 0.05 * prop?.delay,
        duration: prop?.duration || 0.2,
      },
    }),
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
      transition: { duration: 1 },
    },
  },
  NO_MORE: {
    hidden: {
      opacity: 0,
      top: width > 990 ? -300 : -200,
      position: "relative",
    },
    show: {
      opacity: 1,
      top: 0,
      position: "relative",
      transition: { duration: 1 },
    },
  },

  CONTAINER: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};
