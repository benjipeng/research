"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// assets
import logo from "../../../public/logo.svg";
import sun from "../../../public/sun.svg";
import moon from "../../../public/moon.svg";

const NavBar = () => {
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState("dark");

  // useEffect(() => {
  //   let value = localStorage.getItem("theme")
  //     ? localStorage.getItem("theme")
  //     : "light";
  //   setTheme(value);
  // });

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    let value = localStorage.getItem("theme");
    //   ? localStorage.getItem("theme")
    //   : "";
    // setTheme(value);
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="sticky top-0 z-20 bg-black backdrop-filter backdrop-blur-md bg-opacity-10">
      <div className="navbar shadow-lg px-4 sm:px-8">
        <div className="flex-1">
          <Image src={logo} alt="OM" className="btn btn-ghost w-24 p-0" />
          <h1 className="text-xl font-extrabold mx-4">B. Peng, Ph.D.</h1>
        </div>
        <div className="flex-none">
          {/* Toggle button here */}
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-flip w-24 h-6">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              {/* light theme sun image */}
              <Image src={sun} alt="light" className="w-16 h-6 swap-on" />
              {/* dark theme moon image */}
              <Image src={moon} alt="dark" className="w-16 h-6 swap-off" />
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
