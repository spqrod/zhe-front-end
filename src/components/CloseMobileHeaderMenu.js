import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CloseMobileHeaderMenu = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
        const checkbox = document.querySelector(".hamburgerCheckbox");
        checkbox.checked = false;
    }, [pathname]);
  }

  export default CloseMobileHeaderMenu;