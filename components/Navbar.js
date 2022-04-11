import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { CgMusic } from "react-icons/cg";
import { MdLibraryMusic } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { RiSearchFill, RiSettings4Fill } from "react-icons/ri";
import { BsBoxArrowLeft, BsFileMusicFill } from "react-icons/bs";
import { VscClose } from "react-icons/vsc";
import { IoLogIn } from "react-icons/io5";
import { useUserContext } from "../context/userContext";
import { useRouter } from "next/router";
import Data from "../data.json";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [alert, setAlert] = useState(false);
  const { isMenu, setMenu, page, setPage, songNum, setSongNum } =
    useUserContext();
  useEffect(() => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [songNum]);
  const router = useRouter();
  return (
    <>
      <div
        className={`fixed z-[1000] ${
          alert ? "right-10" : " -right-[1000px]"
        }  top-14 transition-all bg-base-200 p-3 rounded-xl   md:alert  justify-start  shadow-lg max-w-xs`}
      >
        <div>
          <div>
            <h3 className="font-bold">Playing {Data[songNum].title}</h3>
            <div className="text-xs">By {Data[songNum].artist} </div>
          </div>
        </div>
        <div
          onClick={() => setAlert(false)}
          className=" bg-base-300 px-4 font-bold text-center rounded-full py-2 cursor-pointer"
        >
          <div>x</div>
        </div>
      </div>
      <div className=" z-50 relative">
        <div className=" absolute navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                onClick={() => setMenu(true)}
                tabIndex="0"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div onClick={() => setPage("")} className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">
              {" "}
              <CgMusic className=" mr-2" /> GroovyMusic
            </a>
          </div>
          <div className="navbar-end">
            <button
              onClick={() => setPage("search")}
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => (alert ? setAlert(false) : setAlert(true))}
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
        <ul
          className={` ${
            isMenu ? " left-0" : " sm:left-0 -left-[400px]"
          }  transition-all  fixed sm:block rounded-r-sm h-screen    menu bg-base-200 w-60 p-3     `}
        >
          <div>
            <BsBoxArrowLeft
              onClick={() => setMenu(false)}
              className=" sm:hidden text-2xl mt-5 ml-3 mb-5  "
            />
            <p className="  text-sm text-center font-semibold mb-5 bg-base-100 py-3 rounded-lg active:scale-95 cursor-pointer">
              {" "}
              <a
                target="_blank"
                rel="noreferrer"
                className=" w-full h-full"
                href="https://pawan67.vercel.app"
              >
                Pawan67
              </a>
            </p>
            <li className=" ">
              <a
                onClick={() => {
                  setPage("");
                  setMenu(false);
                }}
                className={` ${
                  page === "" && "bg-primary text-white"
                }    font-semibold`}
              >
                <AiFillHome className=" text-xl" /> Home{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setPage("search");
                  setMenu(false);
                }}
                className={` ${
                  page === "search" && "bg-primary text-white"
                }    font-semibold`}
              >
                {" "}
                <RiSearchFill className=" text-xl" /> Search{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setPage("playingnow");
                  setMenu(false);
                }}
                className={` ${
                  page === "playingnow" && "bg-primary text-white"
                }    font-semibold`}
              >
                {" "}
                <BsFileMusicFill className=" text-xl" /> Playing now{" "}
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setPage("musiclib");
                  setMenu(false);
                }}
                className={` ${
                  page === "musiclib" && "bg-primary text-white"
                }    font-semibold`}
              >
                {" "}
                <MdLibraryMusic className=" text-xl" /> Music Library{" "}
              </a>
            </li>
          </div>
          <div className=" ">
            <li>
              <div
                onClick={() => {
                  setPage("settings");
                  setMenu(false);
                }}
                className={` ${
                  page === "settings" && "bg-primary text-white"
                }    font-semibold`}
              >
                {" "}
                <RiSettings4Fill className=" text-xl" /> Settings{" "}
              </div>
            </li>
          </div>
        </ul>
      </div>
      {/* <!-- The button to open modal --> */}
      <label htmlFor="my-modal-6" className="btn modal-button"></label>

      {/* <!-- Put this part before </body> tag --> */}

      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold mt-5 text-lg">Welcome Random user!</h3>
          <p className="py-4">
            This is online web music player made with ReactJs, NextJs and
            TailwindCSS for Searching music I'm using{" "}
            <span className=" text-info underline">saavn.me</span> API
          </p>
          <div className="dropdown dropdown-right dropdown-end">
            <label tabIndex="0" className="btn m-1">
              Change Theme
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => setTheme("garden")}>Default</a>
              </li>
              <li>
                <a onClick={() => setTheme("black")}>Black</a>
              </li>

              <li>
                <a onClick={() => setTheme("dark")}>Dark</a>
              </li>
            </ul>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn absolute right-5 top-5">
              <VscClose />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
