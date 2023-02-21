import React, { useState, useEffect, useRef } from "react";
import LottieAnimation from "./LottieAnimation";

function Hero() {
  const [text, setText] = useState("Website");
  const textRef = useRef();

  useEffect(() => {
    const words = ["Website", "App", "Design", "Online Shop"];
    let currentWordIndex = 0;
    const textElement = textRef.current;

    const intervalId = setInterval(() => {
      textElement.classList.add("fade-out");
      setTimeout(() => {
        setText(words[currentWordIndex]);
        textElement.classList.remove("fade-out");
      }, 1000);
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="px-6 hero-container  lg:flex lg:items-center lg:gap-x-10 lg:px-8 py-12">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
        <h1
          style={{ lineHeight: "1.2" }}
          className="mt-10 text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl"
        >
          We are your final
          <br />
          destination for one
          <br />
          <span ref={textRef} className={`text`}>
            {text}
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your online project starts here.<br></br>From web to application
          development.<br></br>BYTE24 brings your online project to life.
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <a
            href="#"
            className="text-sm button-green-gradient font-semibold leading-7 md:px-12 px-4 sm:px-6 sm:text-base py-2 text-white"
          >
            Free e-book Outsource software development{" "}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="mt-4">
        <LottieAnimation />
      </div>
    </div>
  );
}

export default Hero;
