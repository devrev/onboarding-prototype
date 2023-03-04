import React, { useEffect, useState } from "react";

const useMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window?.innerWidth < 500) {
      setIsMobile(true);
    }
  }, []);

  return isMobile;
};

export default useMobileScreen;
