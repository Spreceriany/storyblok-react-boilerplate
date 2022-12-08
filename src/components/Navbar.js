import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const [openNav, setNav] = useState(false);
  const nav = useRef();
  const location = useLocation();

  useEffect(() => {
    setNav(false);
    return () => {
      setNav(false);
    };
  }, [location]);

  const toggleNav = () => {
    console.log(openNav);
    setNav(!openNav);
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };
  return (
    <>
      <div
        className={` font-bold nav md:w-20  flex md:flex-col gap-y-4 w-full z-50  bg-secondary px-4 py-4 text-white  md:transition-all md:hover:w-[50%] md:max-w-[300px] fixed top-0 left-0 right-0   md:min-h-screen md:relative `}
      >
        <div className=" ml-auto md:hidden">
          <span onClick={toggleNav}>hy</span>
        </div>
        <div className="sticky hidden md:flex top-4  md:flex-col gap-y-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " h-8 md:h-12 active transition-all w-full  flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : " h-8 md:h-12 inactive  transition-all w-full  flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              width="41"
              className=" w-6 h-6 md:w-9 md:h-9 transition-all relative left-2 md:left-1"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0737 32.5313H32.0737V17.4946L20.4071 8.42128L8.74041 17.4946V32.5313H18.7404V22.5313H22.0737V32.5313ZM35.4071 34.1979C35.4071 34.64 35.2315 35.0639 34.9189 35.3765C34.6064 35.689 34.1824 35.8646 33.7404 35.8646H7.07374C6.63171 35.8646 6.20779 35.689 5.89523 35.3765C5.58267 35.0639 5.40707 34.64 5.40707 34.1979V16.6813C5.4069 16.4273 5.46477 16.1766 5.57627 15.9484C5.68777 15.7203 5.84994 15.5206 6.05041 15.3646L19.3837 4.99462C19.6763 4.76702 20.0364 4.64346 20.4071 4.64346C20.7777 4.64346 21.1378 4.76702 21.4304 4.99462L34.7637 15.3646C34.9642 15.5206 35.1264 15.7203 35.2379 15.9484C35.3494 16.1766 35.4073 16.4273 35.4071 16.6813V34.1979V34.1979Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-3xl absolute left-12  ">
              Home
            </div>
          </NavLink>
          <NavLink
            to={"/page"}
            className={({ isActive }) =>
              isActive
                ? " h-8 md:h-12 active transition-all w-full  flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : " h-8 md:h-12 inactive  transition-all w-full  flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              className=" w-10 h-10 transition-all relative left-1"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7404 35.0985L20.4071 38.4318L17.0737 35.0985H8.73207C7.85023 35.0985 7.0045 34.7482 6.38094 34.1246C5.75739 33.501 5.40707 32.6553 5.40707 31.7735V8.42346C5.40707 6.5868 6.89541 5.09846 8.73207 5.09846H32.0821C33.9187 5.09846 35.4071 6.5868 35.4071 8.42346V31.7735C35.4071 32.6553 35.0568 33.501 34.4332 34.1246C33.8096 34.7482 32.9639 35.0985 32.0821 35.0985H23.7404ZM32.0737 31.7651V8.4318H8.74041V31.7651H18.4537L20.4071 33.7185L22.3604 31.7651H32.0737ZM13.6937 30.3985C12.6687 29.9545 11.691 29.4084 10.7754 28.7685C11.8325 27.1302 13.2837 25.7832 14.9961 24.8509C16.7084 23.9185 18.6273 23.4306 20.5771 23.4318C24.5771 23.4318 28.1054 25.4435 30.2071 28.5101C29.309 29.1745 28.3464 29.7468 27.3337 30.2185C26.5619 29.1485 25.5467 28.2773 24.3719 27.6769C23.1971 27.0764 21.8964 26.7639 20.5771 26.7651C17.7187 26.7651 15.1937 28.2051 13.6937 30.3985V30.3985ZM20.4071 21.7651C19.641 21.7651 18.8825 21.6142 18.1748 21.3211C17.467 21.0279 16.824 20.5983 16.2823 20.0566C15.7406 19.5149 15.3109 18.8719 15.0178 18.1641C14.7246 17.4564 14.5737 16.6978 14.5737 15.9318C14.5737 15.1658 14.7246 14.4072 15.0178 13.6995C15.3109 12.9917 15.7406 12.3487 16.2823 11.807C16.824 11.2653 17.467 10.8357 18.1748 10.5425C18.8825 10.2493 19.641 10.0985 20.4071 10.0985C21.9542 10.0985 23.4379 10.713 24.5319 11.807C25.6258 12.901 26.2404 14.3847 26.2404 15.9318C26.2404 17.4789 25.6258 18.9626 24.5319 20.0566C23.4379 21.1505 21.9542 21.7651 20.4071 21.7651ZM20.4071 18.4318C21.0701 18.4318 21.706 18.1684 22.1748 17.6996C22.6437 17.2307 22.9071 16.5948 22.9071 15.9318C22.9071 15.2688 22.6437 14.6329 22.1748 14.164C21.706 13.6952 21.0701 13.4318 20.4071 13.4318C19.744 13.4318 19.1081 13.6952 18.6393 14.164C18.1705 14.6329 17.9071 15.2688 17.9071 15.9318C17.9071 16.5948 18.1705 17.2307 18.6393 17.6996C19.1081 18.1684 19.744 18.4318 20.4071 18.4318Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-3xl absolute left-12  ">
              About me
            </div>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? " h-8 md:h-12 active transition-all w-full  flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : " h-8 md:h-12 inactive  transition-all w-full  flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              className=" w-8 h-8 transition-all relative left-2"
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0H28.5C28.8978 0 29.2794 0.146329 29.5607 0.406796C29.842 0.667263 30 1.02053 30 1.38889V23.6111C30 23.9795 29.842 24.3327 29.5607 24.5932C29.2794 24.8537 28.8978 25 28.5 25H1.5C1.10218 25 0.720644 24.8537 0.43934 24.5932C0.158035 24.3327 0 23.9795 0 23.6111V1.38889C0 1.02053 0.158035 0.667263 0.43934 0.406796C0.720644 0.146329 1.10218 0 1.5 0V0ZM27 5.88611L15.108 15.7472L3 5.85556V22.2222H27V5.88611ZM3.7665 2.77778L15.0915 12.0306L26.253 2.77778H3.7665Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-3xl absolute left-12  ">
              Contact
            </div>
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={({ isActive }) =>
              isActive
                ? " h-8 md:h-12 active transition-all w-full  flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : " h-8 md:h-12 inactive  transition-all w-full  flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              className=" w-8 h-8 transition-all relative left-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.409 19C16.633 16.601 15.132 15.115 13.143 13.398C15.0894 11.842 17.5081 10.9961 20 11V3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H6V1H8V5H4V12C9.22 12 13.662 14.462 15.313 19H17.409ZM18 1V5H10V3H16V1H18ZM16.5 10C16.1022 10 15.7206 9.84196 15.4393 9.56066C15.158 9.27936 15 8.89782 15 8.5C15 8.10218 15.158 7.72064 15.4393 7.43934C15.7206 7.15804 16.1022 7 16.5 7C16.8978 7 17.2794 7.15804 17.5607 7.43934C17.842 7.72064 18 8.10218 18 8.5C18 8.89782 17.842 9.27936 17.5607 9.56066C17.2794 9.84196 16.8978 10 16.5 10Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-3xl absolute left-12  ">
              Gallery
            </div>
          </NavLink>
        </div>
      </div>

      <div
        className={` ${
          !openNav ? "translate-x-full" : "translate-x-0"
        }  pt-20  transition-all fixed md:hidden z-50 inset-0 bg-black px-4 flex flex-col w-full h-full`}
      >
        <div className="absolute top-4 right-4 text-4xl" onClick={toggleNav}>
          X
        </div>
        <div className="flex top-4 gap-10   flex-col gap-y-4  font-bold text-2xl">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? " h-12 active transition-all  w-3/5 flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : "h-12 inactive  transition-all w-3/5 flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              width="41"
              className=" w-9 h-9 transition-all relative left-2 md:left-1"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0737 32.5313H32.0737V17.4946L20.4071 8.42128L8.74041 17.4946V32.5313H18.7404V22.5313H22.0737V32.5313ZM35.4071 34.1979C35.4071 34.64 35.2315 35.0639 34.9189 35.3765C34.6064 35.689 34.1824 35.8646 33.7404 35.8646H7.07374C6.63171 35.8646 6.20779 35.689 5.89523 35.3765C5.58267 35.0639 5.40707 34.64 5.40707 34.1979V16.6813C5.4069 16.4273 5.46477 16.1766 5.57627 15.9484C5.68777 15.7203 5.84994 15.5206 6.05041 15.3646L19.3837 4.99462C19.6763 4.76702 20.0364 4.64346 20.4071 4.64346C20.7777 4.64346 21.1378 4.76702 21.4304 4.99462L34.7637 15.3646C34.9642 15.5206 35.1264 15.7203 35.2379 15.9484C35.3494 16.1766 35.4073 16.4273 35.4071 16.6813V34.1979V34.1979Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-1.5xl absolute left-12  ">
              Home
            </div>
          </NavLink>
          <NavLink
            to={"/page"}
            className={({ isActive }) =>
              isActive
                ? " h-12 active transition-all  w-3/5 flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : "h-12 inactive  transition-all w-3/5 flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              className=" w-10 h-10 transition-all relative left-1"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.7404 35.0985L20.4071 38.4318L17.0737 35.0985H8.73207C7.85023 35.0985 7.0045 34.7482 6.38094 34.1246C5.75739 33.501 5.40707 32.6553 5.40707 31.7735V8.42346C5.40707 6.5868 6.89541 5.09846 8.73207 5.09846H32.0821C33.9187 5.09846 35.4071 6.5868 35.4071 8.42346V31.7735C35.4071 32.6553 35.0568 33.501 34.4332 34.1246C33.8096 34.7482 32.9639 35.0985 32.0821 35.0985H23.7404ZM32.0737 31.7651V8.4318H8.74041V31.7651H18.4537L20.4071 33.7185L22.3604 31.7651H32.0737ZM13.6937 30.3985C12.6687 29.9545 11.691 29.4084 10.7754 28.7685C11.8325 27.1302 13.2837 25.7832 14.9961 24.8509C16.7084 23.9185 18.6273 23.4306 20.5771 23.4318C24.5771 23.4318 28.1054 25.4435 30.2071 28.5101C29.309 29.1745 28.3464 29.7468 27.3337 30.2185C26.5619 29.1485 25.5467 28.2773 24.3719 27.6769C23.1971 27.0764 21.8964 26.7639 20.5771 26.7651C17.7187 26.7651 15.1937 28.2051 13.6937 30.3985V30.3985ZM20.4071 21.7651C19.641 21.7651 18.8825 21.6142 18.1748 21.3211C17.467 21.0279 16.824 20.5983 16.2823 20.0566C15.7406 19.5149 15.3109 18.8719 15.0178 18.1641C14.7246 17.4564 14.5737 16.6978 14.5737 15.9318C14.5737 15.1658 14.7246 14.4072 15.0178 13.6995C15.3109 12.9917 15.7406 12.3487 16.2823 11.807C16.824 11.2653 17.467 10.8357 18.1748 10.5425C18.8825 10.2493 19.641 10.0985 20.4071 10.0985C21.9542 10.0985 23.4379 10.713 24.5319 11.807C25.6258 12.901 26.2404 14.3847 26.2404 15.9318C26.2404 17.4789 25.6258 18.9626 24.5319 20.0566C23.4379 21.1505 21.9542 21.7651 20.4071 21.7651ZM20.4071 18.4318C21.0701 18.4318 21.706 18.1684 22.1748 17.6996C22.6437 17.2307 22.9071 16.5948 22.9071 15.9318C22.9071 15.2688 22.6437 14.6329 22.1748 14.164C21.706 13.6952 21.0701 13.4318 20.4071 13.4318C19.744 13.4318 19.1081 13.6952 18.6393 14.164C18.1705 14.6329 17.9071 15.2688 17.9071 15.9318C17.9071 16.5948 18.1705 17.2307 18.6393 17.6996C19.1081 18.1684 19.744 18.4318 20.4071 18.4318Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-2xl absolute left-12  ">
              About me
            </div>
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? " h-12 active transition-all  w-3/5 flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : "h-12 inactive  transition-all w-3/5 flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              className=" w-8 h-8 transition-all relative left-2"
              width="30"
              height="25"
              viewBox="0 0 30 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 0H28.5C28.8978 0 29.2794 0.146329 29.5607 0.406796C29.842 0.667263 30 1.02053 30 1.38889V23.6111C30 23.9795 29.842 24.3327 29.5607 24.5932C29.2794 24.8537 28.8978 25 28.5 25H1.5C1.10218 25 0.720644 24.8537 0.43934 24.5932C0.158035 24.3327 0 23.9795 0 23.6111V1.38889C0 1.02053 0.158035 0.667263 0.43934 0.406796C0.720644 0.146329 1.10218 0 1.5 0V0ZM27 5.88611L15.108 15.7472L3 5.85556V22.2222H27V5.88611ZM3.7665 2.77778L15.0915 12.0306L26.253 2.77778H3.7665Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-2xl absolute left-12  ">
              Contact
            </div>
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={({ isActive }) =>
              isActive
                ? " h-12 active transition-all  w-3/5 flex  justify-start items-center relative overflow-hidden  rounded-full hover:bg-cyan"
                : "h-12 inactive  transition-all w-3/5 flex justify-start  items-center relative overflow-hidden hover:bg-cyan rounded-full"
            }
          >
            {" "}
            <svg
              className=" w-8 h-8 transition-all relative left-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.409 19C16.633 16.601 15.132 15.115 13.143 13.398C15.0894 11.842 17.5081 10.9961 20 11V3H21.008C21.556 3 22 3.445 22 3.993V20.007C21.9982 20.2696 21.8931 20.521 21.7075 20.7068C21.5219 20.8926 21.2706 20.9979 21.008 21H2.992C2.72881 20.9997 2.4765 20.895 2.29049 20.7088C2.10448 20.5226 2 20.2702 2 20.007V3.993C2.00183 3.73038 2.1069 3.47902 2.29251 3.29322C2.47813 3.10742 2.72938 3.00209 2.992 3H6V1H8V5H4V12C9.22 12 13.662 14.462 15.313 19H17.409ZM18 1V5H10V3H16V1H18ZM16.5 10C16.1022 10 15.7206 9.84196 15.4393 9.56066C15.158 9.27936 15 8.89782 15 8.5C15 8.10218 15.158 7.72064 15.4393 7.43934C15.7206 7.15804 16.1022 7 16.5 7C16.8978 7 17.2794 7.15804 17.5607 7.43934C17.842 7.72064 18 8.10218 18 8.5C18 8.89782 17.842 9.27936 17.5607 9.56066C17.2794 9.84196 16.8978 10 16.5 10Z"
                fill="white"
              />
            </svg>
            <div className=" overflow-hidden  top-1/2 -translate-y-1/2  md:opacity-0 link text-2xl absolute left-12  ">
              Gallery
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
