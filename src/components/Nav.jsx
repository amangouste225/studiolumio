import { motion } from "framer-motion";
import { blur, imageHover, navHeight, translate } from "./animations/anim";
import { Link } from "react-router-dom";
import { useState } from "react";
import { chairs, tables, hero, looks, lamps } from "./images/image";
import { FooterMenu } from "./FooterMenu";

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

const footerMenu = {
  link: "Amangoua Kacou",
  typography: "google fonts",
  images: [
    { id0: "FREEPIK", link0: "https://www.freepik.com/" },
    { id1: "ENVATO", link1: "https://elements.envato.com/fr/" },
  ],
  privacy: [
    { id0: "PRIVACY POLICY", link0: "https://www.freepik.com/" },
    { id1: "TERMS & CONDITIONS", link1: "https://elements.envato.com/fr/" },
  ],
};

export const Nav = () => {
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
      className="absolute block h-auto bg-header top-16 z-[160] w-full overflow-hidden"
    >
      <ul className="mt-10 p-2 flex gap-y-3 flex-wrap gap-5 uppercase lg:max-w-5xl max-w-xl tracking-site">
        {navMenu.map((title, index) => (
          <li
            key={index}
            className="lg:text-nav md:text-upper text-medium overflow-hidden pr-4 nav"
          >
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
              <div className="absolute -top-10 right-5 lg:block hidden">
                <motion.div
                  variants={imageHover}
                  initial="initial"
                  exit="exit"
                  animate={
                    selectedLink.menu && selectedLink.index != index
                      ? "enter"
                      : "exit"
                  }
                  className="relative pointer-events-none w-[350px] h-[400px] lg:flex justify-center items-center"
                >
                  <img
                    src={navMenu[selectedLink.index].img}
                    alt={title.name}
                    className="w-full h-full absolute top-0 left-0 bottom-0 object-cover"
                  />
                </motion.div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative px-5 max-w-6xl md:-bottom-32 -bottom-10  h-12">
        <ul className="uppercase grid lg:grid-cols-4 grid-cols-2 lg:gap-20 gap-5 overflow-hidden items-center">
          <FooterMenu
            title="made by"
            href1={footerMenu.link}
            href="https://www.linkedin.com/in/angethierry/"
          />

          <FooterMenu
            title="typography"
            href1={footerMenu.typography}
            href="https://fonts.google.com/specimen/Manrope"
          />

          <FooterMenu
            title="images"
            href1={footerMenu.images[0].id0}
            href={footerMenu.images[0].link0}
            href2={footerMenu.images[1].id1}
            href3={footerMenu.images[1].link1}
          />
          <FooterMenu
            href1={footerMenu.privacy[0].id0}
            href={footerMenu.privacy[0].link0}
            href2={footerMenu.privacy[1].id1}
            href3={footerMenu.privacy[1].link1}
          />
        </ul>
      </div>
    </motion.div>
  );
};
