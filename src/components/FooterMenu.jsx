import { translate } from "./animations/anim";

import { motion } from "framer-motion";

export const FooterMenu = ({ title, href1, href, href2, href3, subtile }) => {
  return (
    <motion.li
      custom={[0.2, 0]}
      variants={translate}
      initial="initial"
      animate="enter"
      exit="exit"
      className="text-small"
    >
      <span className="text-secondary">
        {title}
        {title && <span>:</span>}
      </span>
      <span className="text-black font-medium">
        <a href={href} target="_blank" rel="noreferrer">
          {href1}
        </a>
        {href2 && <span>, </span>}
        <a href={href3} target="_blank" rel="noreferrer">
          {href2}
        </a>
      </span>
    </motion.li>
  );
};
