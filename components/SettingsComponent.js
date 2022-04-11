import React from "react";
import { useUserContext } from "../context/userContext";
import { useTheme } from "next-themes";

import { IoColorPaletteSharp } from "react-icons/io5";
const SettingsComponent = () => {
  const { page, setPage, isMenu } = useUserContext();
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <div
        className={` ${
          isMenu ? " blur-sm" : ""
        } absolute mt-5 sm:mt-2  sm:left-60 px-8 sm:px-10`}
      >
        <h1 className=" text-2xl mt-5 font-bold">Personalization</h1>
        <div className="dropdown ">
          <label tabIndex="0" className=" btn  mt-5">
            Change theme <IoColorPaletteSharp className="  ml-2 text-xl" />
          </label>
          <ul
            tabIndex="0"
            className="  dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => setTheme("garden")}>
              <a>Default</a>
            </li>
            <li onClick={() => setTheme("dark")}>
              <a>Dark</a>
            </li>
            <li onClick={() => setTheme("black")}>
              <a>Black</a>
            </li>

            <li onClick={() => setTheme("acid")}>
              <a>Acid </a>
            </li>
            <li onClick={() => setTheme("lemonade")}>
              <a>Lemonade 🍋</a>
            </li>
            <li onClick={() => setTheme("wireframe")}>
              <a>Wireframe</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className=" mt-10 text-2xl font-bold">About Groovy music</h1>
          <p className=" font-medium md:w-3/4 mt-3">
            Groovy music is a music player made with ReactJs, NextJs and
            TailwindCSS for Searching music I'm using{" "}
            <a href="https://saavn.me" className=" text-info underline">
              saavn.me
            </a>{" "}
            API
          </p>
        </div>
        <div>
          <h1 className=" mt-10 text-2xl font-bold">About me</h1>
          <div className=" flex mt-5 items-center text-xl font-semibold space-x-2">
            <img
              className=" w-10 rounded-xl"
              src="https://pawan67.vercel.app/images/image1.jpg"
              alt=""
            />
            <p>Pawan67</p>
          </div>
          <p className=" mt-5 font-medium ">
            I am self-taught Front-end Web developer who loves to build amazing
            and useful websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;
