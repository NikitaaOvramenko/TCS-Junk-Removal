import { useEffect } from "react";

export const ScrollUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
