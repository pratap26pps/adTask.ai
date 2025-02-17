import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and close icons

const Navbar = () => {
  // State for dropdown menus
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state

  // Toggle dropdown
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="text-white">
      <div
        className="lg:w-[1176px] w-full lg:scale-100 h-[63px] z-50
         rounded-[16px] top-[33px] mx-auto relative scale-90
        border-[1px] border-[rgba(255,255,255,0.1)] p-2
       bg-[rgba(105,97,92,0.1)]"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl">ad<b>Task</b>.ai</div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-6">
            {/* Products Dropdown */}
            <div className="relative cursor-pointer">
              <div
                className="flex items-center gap-1"
                onClick={() => toggleDropdown("products")}
              >
                <p>Products</p>
                <MdOutlineArrowDropDown className="text-white mt-1" />
              </div>
              {openDropdown === "products" && (
                <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                  <ul className="p-2">
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">Product 1</li>
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">Product 2</li>
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">Product 3</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Tools Dropdown */}
            <div className="relative cursor-pointer">
              <div
                className="flex items-center gap-1"
                onClick={() => toggleDropdown("tools")}
              >
                <p>Tools</p>
                <MdOutlineArrowDropDown className="text-white mt-1" />
              </div>
              {openDropdown === "tools" && (
                <div className="absolute left-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg">
                  <ul className="p-2">
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">Tool 1</li>
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">Tool 2</li>
                    <li className="p-2 hover:bg-gray-700 cursor-pointer">Tool 3</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="cursor-pointer">Contact Us</div>
          </div>

          {/* Buttons - Hidden on small screens */}
          <div className="hidden lg:flex gap-5">
            <div className="p-2 w-[12vw] h-11 cursor-pointer rounded-full bg-[rgba(38,48,72,1)] border border-blue-400 shadow-sm shadow-amber-50">
              Log in
            </div>
            <div className="p-2 w-[16vw] h-11 cursor-pointer rounded-full bg-[rgba(38,48,72,1)] border border-blue-400 shadow-sm shadow-amber-50">
              Schedule a Call
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            {menuOpen ? (
              <FiX size={30} onClick={() => setMenuOpen(false)} />
            ) : (
              <FiMenu size={30} onClick={() => setMenuOpen(true)} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[100px] z-50 left-0 w-full bg-gray-900 p-5 text-white">
          <div className="flex flex-col  gap-4">
            <div className="cursor-pointer" onClick={() => toggleDropdown("products")}>
              Products <MdOutlineArrowDropDown className="inline" />
            </div>
            {openDropdown === "products" && (
              <ul className="pl-5">
                <li className="p-2 hover:bg-gray-700 cursor-pointer">Product 1</li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">Product 2</li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">Product 3</li>
              </ul>
            )}

            <div className="cursor-pointer" onClick={() => toggleDropdown("tools")}>
              Tools <MdOutlineArrowDropDown className="inline" />
            </div>
            {openDropdown === "tools" && (
              <ul className="pl-5">
                <li className="p-2 hover:bg-gray-700 cursor-pointer">Tool 1</li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">Tool 2</li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">Tool 3</li>
              </ul>
            )}

            <div className="cursor-pointer">Contact Us</div>

            {/* Mobile Buttons */}
            <div className="p-2 w-full cursor-pointer rounded-full bg-[rgba(38,48,72,1)] border border-blue-400 shadow-sm shadow-amber-50">
              Log in
            </div>
            <div className="p-2 w-full cursor-pointer rounded-full bg-[rgba(38,48,72,1)] border border-blue-400 shadow-sm shadow-amber-50">
              Schedule a Call
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
