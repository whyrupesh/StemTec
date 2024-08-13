import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 500, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

export default function About() {
  return (
    <div data-aos="fade-left">
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">StemTec</span>
            </h2>
            <p className="text-gray-700">
              <div>
                StemTec is a forward-thinking company specializing in the
                development and application of AI and robotics solutions
                tailored specifically for the education and industry sectors.
                The company is dedicated to transforming learning environments
                by integrating cutting-edge AI technologies and robotic systems,
                enhancing the educational experience for students and educators
                alike.
              </div>
              <br />
              <div>
                In the industrial sector, StemTec's innovative solutions are
                designed to streamline operations, improve efficiency, and
                foster a future-ready workforce. By merging advanced robotics
                with AI, StemTec provides industries with tools that not only
                automate tasks but also enable smarter decision-making
                processes.
              </div>
              <br />
              <div>
                StemTec's mission is to bridge the gap between technology and
                practical application, making sophisticated AI and robotics
                accessible and beneficial to educational institutions and
                industrial enterprises globally.
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
