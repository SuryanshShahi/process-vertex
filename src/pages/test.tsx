import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Test = () => {
  const container = useRef();

  useEffect(() => {
    container.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        markers: true,
        start: "38% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
      },
    });
    container.current
      .to(
        ".text",
        {
          top: "-7%",
        },
        "a"
      )
      .to(
        "#card-one",
        {
          top: "35%",
        },
        "a"
      )
      .to(
        "#card-two",
        {
          top: "130%",
        },
        "a"
      )
      .to(
        "#card-two",
        {
          top: "42%",
        },
        "b"
      )
      .to(
        "#card-one",
        {
          width: "65%",
          height: "65vh",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "130%",
        },
        "b"
      )
      .to(
        "#card-three",
        {
          top: "50%",
        },
        "c"
      )
      .to(
        "#card-two",
        {
          width: "70%",
          height: "70vh",
        },
        "c"
      );
  }, []);

  return (
    <div id="main" ref={container}>
      <div className="text">
        <div className="text-img"></div>
        <h1>
          Create new feature at <br></br>Gravity Coding
        </h1>
        <p>
          Subscribe our channel for latest features of awwwards website. Check
          out other videos <br></br>for learning web development with great UI
          design and animation based.
        </p>
      </div>
      <div className="cards" id="card-one"></div>
      <div className="cards" id="card-two"></div>
      <div className="cards" id="card-three"></div>
    </div>
  );
};

export default Test;
