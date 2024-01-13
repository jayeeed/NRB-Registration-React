import {
  FaHome,
  FaInbox,
  FaSignOutAlt,
  FaUser,
  FaWpforms,
} from "react-icons/fa";
import Profile from "../Profile/Profile";
import SidebarItem from "../../components/SidebarItem/SidebarItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Clear the token from local storage
    localStorage.removeItem("token");
  };
  const notification = (
    <>
      <span
        className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium
                 text-purple-800 bg-purple-100 rounded-full"
      >
        3
      </span>
    </>
  );
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-violet-300 border-b border-purple-900">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                type="button"
                onClick={toggleMenu}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-violet-300 focus:outline-none focus:ring-2"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link to="/" className="flex ms-2 md:me-24">
                <img
                  src="./c2b.svg"
                  alt="c2b"
                  className="self-center"
                  style={{ width: "50px", height: "50px" }} // Adjust width and height as needed
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } bg-violet-300 border-r border-gray-200 sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-violet-300">
          <ul className="space-y-2 font-medium">
            <Link to="https://www.ipsitasoft.com/">
              <SidebarItem itemName={"Home"} logo={<FaHome />} />
            </Link>

            <SidebarItem
              itemName={"Inbox"}
              logo={<FaInbox />}
              notification={notification}
            />

            <Link to="/profile">
              <SidebarItem itemName={"Profile"} logo={<FaUser />} />
            </Link>

            <Link to="/info">
              <SidebarItem itemName={"OLD form"} logo={<FaWpforms />} />
            </Link>

            <Link to="/registration">
              <SidebarItem itemName={"Registration"} logo={<FaWpforms />} />
            </Link>

            <Link onClick={handleLogout} to="/">
              <SidebarItem itemName={"Logout"} logo={<FaSignOutAlt />} />
            </Link>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 mt-[46px] bg-purple-200">
        <Profile />
      </div>
    </div>
  );
};

export default Sidebar;
