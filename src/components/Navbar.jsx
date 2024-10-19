import { useEffect, useRef } from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import gsap from "gsap";

const Navbar = () => {
    const footnoteRef = useRef(null);
  
    useEffect(() => {
      if (footnoteRef.current) {
        gsap.fromTo(footnoteRef.current, {
          opacity: 0, 
        }, {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        });
      }
    }, []);

  return (
    <>
      <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
          <img src={appleImg} alt="apple" width={14} height={16} />

          <div className="flex flex-1 justify-center">
            {navLists.map((nav, i) => (
              <div
                key={nav}
                className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={14} height={16} />
            <img src={bagImg} alt="bag" width={14} height={16} />
          </div>
        </nav>
      </header>

      <div
        id="footnote"
        ref={footnoteRef}
        className="bg-white bg-opacity-10 p-2 w-full text-center text-sm opacity-0 flex items-center justify-center" 
      >
        <span>
          $650 in credit toward iPhone&nbsp;16 or iPhone&nbsp;16&nbsp;Pro when
          you trade in iPhone&nbsp;12 or&nbsp;higher.
        </span>
        <span className="footnote footnote-supglghy">
          <a href="#" aria-label="Footnote * symbol" data-model-close>
            *
          </a>
        </span>
        <a
          className="text-[#2997ff] hover:underline flex items-center ml-1"
          href="#highlights"
          data-analytics-title="buy | iphone 16 pro"
          aria-label="Buy iPhone 16 Pro"
        >
          Buy
          <span className="ml-1 text-lg">›</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
