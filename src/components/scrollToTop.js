import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-cyan-800 text-white p-3 rounded-full shadow-lg hover:bg-cyan-900 transition"
          aria-label="Scroll to top"
        >
          ⬆
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
