import Sidebar from "../Sidebar";
import Background from "./Background";
import "./index.scss";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isHomePath = location.pathname === "/";
  const homeClass = isHomePath ? "home" : "";
  const [showNav, setShowNav] = useState(false);
  const navClass = showNav ? "show-nav" : "";

  useEffect(() => {
    const updateVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    updateVh(); // call on component mount
    window.addEventListener("resize", updateVh);

    return () => {
      window.removeEventListener("resize", updateVh); // cleanup on unmount
    };
  }, []);

  return (
    <div>
      <Sidebar showNav={showNav} setShowNav={setShowNav} />
      <div className={`page ${homeClass} ${navClass}`}>
        <Background />
        <span className="tags top-tag-body">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tag-body">&lt;/body&gt;</span>
        <span className="tags bottom-tag-html">&lt;/html&gt;</span>
      </div>
    </div>
  );
};

export default Layout;
