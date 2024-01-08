import { AnimatePresence } from "framer-motion";

import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { opacity } from "./animations/anim";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Link } from "react-router-dom";
export const Header = () => {
  const [menu, setAnim] = useState(false);

  const menuAnim = () => {
    setAnim((prev) => !prev);
  };

  return (
    <div className="w-screen">
      <header className=" fixed z-30 w-full flex h-16 justify-between bg-header px-3 items-center uppercase text-primary font-medium">
        <div className="flex-1">
          <Link to="/"> props</Link>
        </div>
        <button
          className="flex-1 flex justify-center items-center uppercase"
          onClick={menuAnim}
        >
          <div className={`burger ${menu ? "menu_active" : ""}`}></div>
          <motion.div
            variants={opacity}
            animate={menu ? "closed" : "open"}
            className="absolute "
          >
            menu
          </motion.div>
          <motion.div
            variants={opacity}
            animate={menu ? "open" : "closed"}
            className="absolute"
          >
            close
          </motion.div>
        </button>
        <motion.div
          variants={opacity}
          animate={menu ? "closed" : "menu"}
          className="flex lg:gap-16 gap-4 flex-1 justify-end"
        >
          <div>shop</div>
          <div className="flex justify-end items-center gap-3">
            <BsCart2 size="22" />

            <span className="inline-block">cart(0)</span>
          </div>
        </motion.div>
      </header>
      <AnimatePresence mode="wait">
        {menu && <Nav menu={menu} />}
      </AnimatePresence>
    </div>
  );
};
