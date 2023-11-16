"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "./Icons";

const ScrollToSearchBox = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      } p-2 border border-white/70 rounded-lg backdrop-blur-sm hover:bg-[#2ec4b6]/10 hover:border-[#20a4f3] z-40`}
      onClick={scrollToTop}
    >
      <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default ScrollToSearchBox;