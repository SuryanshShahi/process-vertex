import React, { useEffect, useRef, useState } from "react";

export const useComponentVisible = (initialValue: boolean) => {
  const [isActive, setActive] = useState(initialValue);
  const ref = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return { ref, isActive, setActive };
};

const Test = () => {
  const { ref, isActive, setActive } = useComponentVisible(false);
  return (
    <div className="relative bg-blue-200 w-[400px]">
      <div onClick={() => setActive(true)} className="w-[400px]">
        click
      </div>
      {isActive && (
        <div ref={ref} className="bg-red-500 h-40 w-full absolute"></div>
      )}
    </div>
  );
};

export default Test;
