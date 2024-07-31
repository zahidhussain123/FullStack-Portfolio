import { useState } from "react";
import Home from "../../pages/home/Home";
import "./layout.css";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import Menus from "../menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="sidebar-section">
      <div className={toggle ? ` sidebar-toggle sidebar` : "sidebar "}>
        <div className="sidebar-toggle-icons">
          <p onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <BsChevronDoubleLeft size={30} />
            ) : (
              <BsChevronDoubleRight size={30} />
            )}
          </p>
        </div>
        <Menus toggle={toggle} />
      </div>
        <div className="container">
          <Home />
        </div>
    </div>
  );
};

export default Layout;
