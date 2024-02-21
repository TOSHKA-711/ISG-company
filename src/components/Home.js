import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Home() {
  const sliderRef = useRef(null);

  const activate = (e) => {
    const slider = sliderRef.current;
    const items = slider.querySelectorAll(".item");
    if (e.target.classList.contains("next")) {
      slider.append(items[0]);
    } else if (e.target.classList.contains("prev")) {
      slider.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", activate);
    return () => {
      document.removeEventListener("click", activate);
    };
  }, []); // Empty array as second argument to run only on mount and unmount

  return (
    <div className="home section" id="home">
      <main>
        <ul ref={sliderRef} className="slider">
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://infoglobe.com.kw/content/images/slider1.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Digital Transformation"</h2>
              <p className="description">
                {" "}
                ISG leads organizations through comprehensive digital
                transformation initiatives, focusing on enhancing efficiency,
                agility, and innovation..{" "}
              </p>
              
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://infoglobe.com.kw/content/images/slider2.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Enterprise Content Management (ECM)"</h2>
              <p className="description">
                {" "}
                Leveraging over 15 years of experience, ISG offers robust ECM
                solutions for efficient content management and collaboration..{" "}
              </p>
              
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://infoglobe.com.kw/content/images/slider5.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Digital Transformation"</h2>
              <p className="description">
                {" "}
                ISG leads organizations through comprehensive digital
                transformation initiatives, focusing on enhancing efficiency,
                agility, and innovation..{" "}
              </p>
              
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://infoglobe.com.kw/content/images/slider3.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">
                "Enterprise Information Management (EIM)"
              </h2>
              <p className="description">
                {" "}
                ISG's EIM solutions optimize information assets to enable
                smarter decision-making and streamline operations..{" "}
              </p>
              
            </div>
          </li>
          <li
            className="item"
            style={{
              backgroundImage:
                "url('https://infoglobe.com.kw/content/images/slider4.jpg')",
            }}
          >
            <div className="content">
              <h2 className="title">"Business Process Management (BPM)"</h2>
              <p className="description">
                {" "}
                ISG delivers strategic BPM solutions to improve process
                efficiency and drive business growth..{" "}
              </p>
              
            </div>
          </li>
        </ul>
        <nav className="nav">
          <div className="btn">
            <div className="layer prev"></div>
            <FaArrowLeft />
          </div>
          <div className="btn ">
            <div className="layer next"></div>
            <FaArrowRight />
          </div>
        </nav>
      </main>
    </div>
  );
}
