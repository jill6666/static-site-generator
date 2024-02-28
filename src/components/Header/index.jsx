import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronLeftIcon, CubeIcon } from "@radix-ui/react-icons";

const Header = ({ extra }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const showBackkey = location.pathname !== "/";

  const handleScroll = () => {
    if (!showBackkey) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else navigate(-1);
  };

  return (
    <div className="w-full bg-[#FFFFFF] border-b text-[#272727] fixed top-0 z-40">
      <nav
        className={`flex min-h-[60px] m-auto w-full max-w-[1000px] justify-between items-center`}
      >
        <a
          onClick={handleScroll}
          className={`cursor-pointer text-xl tracking-widest flex items-center gap-2`}
        >
          {showBackkey && (
            <>
              <ChevronLeftIcon className="flex mr-2" />
              <CubeIcon />
            </>
          )}
          {!showBackkey && <p>CUBE</p>}
        </a>
        {extra}
      </nav>
    </div>
  );
};

export default Header;
