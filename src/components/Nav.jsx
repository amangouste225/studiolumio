import { BsCart2 } from "react-icons/bs";
import { useState } from "react";

export const Nav = () => {
  const [menu, setAnim] = useState(false);

  const menuAnim = () => {
    setAnim((prev) => !prev);
  };

  return (
    <div>
      <header className=" fixed z-30 w-full flex h-16 justify-between bg-header px-3 items-center uppercase text-primary font-medium">
        <div className="flex-1">props</div>
        <div
          className="flex-1 text-center flex justify-center gap-3 items-center cursor-pointer"
          onClick={menuAnim}
        >
          <span className={`${menu ? "menu_active" : ""} burger`}></span>
          menu
        </div>
        <div className="flex gap-16 flex-1 justify-end">
          <div>shop</div>
          <div className="flex justify-end items-center gap-3">
            <BsCart2 />

            <span className="inline-block">cart(0)</span>
          </div>
        </div>
      </header>
    </div>
  );
};
