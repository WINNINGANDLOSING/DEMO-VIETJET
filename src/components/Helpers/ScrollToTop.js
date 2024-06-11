import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, search, hash, state } = useLocation();

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}

export default ScrollToTop;
