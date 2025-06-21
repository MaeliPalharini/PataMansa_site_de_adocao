export const listSectionVariants = {
  initial: {x: -100, opacity: 0},
  animate: {x: 0, opacity: 1},
  transition: {duration: 0.5},
};

export const detailSectionVariants = {
  initial: {x: 100, opacity: 0},
  animate: {x: 0, opacity: 1},
  transition: {duration: 0.5},
};

export const dogItemVariants = {
  initial: {y: 50, opacity: 0},
  animate: {y: 0, opacity: 1},
  exit: {opacity: 0, y: 20},
};

export const fadeIn = {
  initial: {opacity: 0, filter: "blur(2px)"},
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {duration: 1, ease: "easeIn"},
  },
};

export const getDogItemTransition = (index: number) => ({
  delay: index * 0.05,
  duration: 0.3,
});
