import { Logo } from "../assets";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { navData } from "../utilities/data";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <>
      <div className="py-2 bg-white shadow-lg">
        <div className="md:w-[85%] md:px-0 px-5 mx-auto flex items-center justify-between ">
          <div className="logo md:w-1/2 w-[40%]">
            <img src={Logo} alt="logo" className="md:" />
          </div>

          <div className="md:w-1/2 md:block hidden">
            <ul className="nav flex items-center justify-end gap-10">
              {navData?.map((item, index) => (
                <Link key={index} to={item?.link}>
                  <li
                    className={`text-theBlue font-semibold ${
                      item.name === "Contact Us"
                        ? "bg-theGold px-4 py-2 shadow-lg rounded-lg"
                        : ""
                    }`}
                  >
                    {item?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          <div
            className="md:hidden block"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            {navIsOpen ? (
              <GrClose className=" text-3xl" />
            ) : (
              <FaBarsStaggered className=" text-3xl" />
            )}
          </div>
        </div>
        {navIsOpen && (
          <div className="mobile h-[80vh] flex items-center justify-center">
            <ul className="nav flex items-center justify-center flex-col gap-10">
              {navData?.map((item, index) => (
                <Link
                  key={index}
                  to={item?.link}
                  onClick={() => setNavIsOpen(!navIsOpen)}
                >
                  <li
                    className={`text-theBlue font-semibold ${
                      item.name === "Contact Us"
                        ? "bg-theGold px-4 py-2 shadow-lg rounded-lg"
                        : ""
                    }`}
                  >
                    {item?.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
