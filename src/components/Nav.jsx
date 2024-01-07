import { motion } from "framer-motion";
import { blur, navHeight, translate } from "./animations/anim";
import { Link } from "react-router-dom";
import { useState } from "react";

const navMenu = [
  { name: "home", href: "/" },
  { name: "shop", href: "/shop" },
  { name: "about us", href: "/about" },
  { name: "lookbook", href: "/lookbook" },
  { name: "Contact", href: "/contact" },
];

const getChars = (title, index) => {
  let chars = [];
  title.split("").forEach((char, id) => {
    chars.push(
      <motion.span
        custom={[id * 0.02, (title.length - id) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={index}
      >
        {char}
      </motion.span>
    );
  });
  return chars;
};

export const Nav = () => {
  return (
    <motion.div
      variants={navHeight}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute h-auto bg-header top-16 z-50 w-full"
    >
      <ul className="flex flex-wrap uppercase gap-x-5 gap-y-5 max-w-5xl p-5 tracking-site ">
        {navMenu.map(({ name, href }) => (
          <li key={name} className="text-nav overflow-hidden h-auto pr-4">
            <Link to={`${href}`}>
              <motion.p className="flex">{getChars(name)}</motion.p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
