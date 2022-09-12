import { useState, useEffect } from "react";

// import nav icons
import { close, logo, menu } from "../assets";

// import nav links
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [addBlur, setAddBlur] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? setAddBlur(true) : setAddBlur(false);
    });
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] sm:px-16 px-6 xl:max-w-[1280px] mx-auto xl:px-0 w-full flex py-6 justify-between items-center ${
        addBlur ? "blurNav" : ""
      }`}
    >
      {/* logo */}
      <a href="#home">
        <img src={logo} alt="logo" className="w-[174px] h-[32px] hover:scale-110 transition" />
      </a>

      {/* nav links */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`#${link.id}`} className="hover:text-secondary transition">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* burger icon */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="burger"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* mobile nav menu */}
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        {/* mobile nav links */}
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((link, index) => (
            <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mb-4"
              } text-white`}
            >
              <a href={`#${link.id}`} onClick={() => setToggle(!toggle)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
