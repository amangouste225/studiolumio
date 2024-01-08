const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 1 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const navHeight = {
  initial: {
    height: 0,
  },
  enter: {
    height: "400px",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const translate = {
  initial: {
    y: "100%",
  },
  enter: (i) => ({
    opacity: 1,
    y: "0",
    transition: { ...transition, delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },

  enter: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  exit: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const imageHover = {
  initial: {
    opacity: 0,
    display: "none",
  },
  enter: {
    opacity: 1,
    transition,
    display: "block",
  },
  exit: {
    opacity: 0,
    transition,
    display: "none",
  },
};
