import { motion } from "framer-motion";
import { blur, imageHover, navHeight, translate } from "./animations/anim";
import { Link } from "react-router-dom";
import { useState } from "react";
import { chairs, tables, lamps, hero, looks } from "./images/image";

const navMenu = [
  { name: "home", href: "/", img: chairs },
  { name: "shop", href: "/shop", img: tables },
  { name: "about us", href: "/about", img: lamps },
  { name: "lookbook", href: "/lookbook", img: hero },
  { name: "Contact", href: "/contact", img: looks },
];

const getChars = (title) => {
  let chars = [];
  title.split("").forEach((char, index) => {
    chars.push(
      <motion.span
        custom={[index * 0.02, (title.length - index) * 0.01]}
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

export const Nav = ({ menu }) => {
  const [selectedLink, setSelectedLink] = useState({
    menu: false,
    index: 0,
  });

  const onMouseOver = (index) => {
    setSelectedLink({ menu: true, index });
  };

  const onMouseLeave = (index) => {
    setSelectedLink({ menu: false, index });
  };

  return (
    <motion.div
      variants={navHeight}
      initial="initial"
      animate="enter"
      exit="exit"
      className="absolute block h-auto bg-header top-16 z-50 w-full"
    >
      <ul className="mt-10 flex flex-wrap gap-5 uppercase max-w-5xl tracking-site">
        {navMenu.map((title, index) => (
          <li key={index} className="text-nav overflow-hidden pr-4">
            <Link
              to={`${title.href}`}
              onMouseOver={() => onMouseOver(index)}
              onMouseLeave={() => onMouseLeave(index)}
            >
              <motion.p
                variants={blur}
                animate={
                  selectedLink.menu && selectedLink.index != index
                    ? "enter"
                    : "exit"
                }
                className="flex"
              >
                {getChars(title.name)}
              </motion.p>
              <div className="absolute -top-10 right-5">
                <motion.div
                  variants={imageHover}
                  initial="initial"
                  exit="exit"
                  animate={
                    selectedLink.menu && selectedLink.index != index
                      ? "enter"
                      : "exit"
                  }
                  className="relative pointer-events-none w-[400px] h-[400px] flex justify-center items-center"
                >
                  <img
                    src={navMenu[selectedLink.index].img}
                    alt="img"
                    className="w-full h-full  absolute top-0 left-0 bottom-0 object-cover"
                  />
                </motion.div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
