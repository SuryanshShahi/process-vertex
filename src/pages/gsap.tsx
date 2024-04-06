import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Index = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".box", { opacity: 0, stagger: 0.1 });
    },
    { scope: container }
  ); // <-- magic

  return (
    <div ref={container}>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
};

export default Index;
