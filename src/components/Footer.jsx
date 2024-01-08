import { motion } from "framer-motion";
import { blurBackground } from "./animations/anim";

export const Footer = ({ menu }) => {
  return (
    <motion.div
      variants={blurBackground}
      animate={menu ? "enter" : "exit"}
      exit="exit"
      className="h-screen footer w-screen top-0 bottom-0 left-0 fixed z-[70]"
    ></motion.div>
  );
};
