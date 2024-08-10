import React from "react";
import Products from "./Products";
import Courses from "./Courses";
import About from "./About";
import Footer from "../components/Footer";
import Contact from "./Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export default function Home() {
  return (
    <>
      <div className=" flex justify-center ">
        <img src="/download.png" alt="Robot Picture" className="w-full" />
      </div>
      <div className="flex flex-col items-center">
        <div className="font-semibold text-5xl md:text-9xl text-gray-700">
          <span className="text-indigo-700">Stem</span>Tec
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <div className="text-gray-700 text-sm md:text-3xl ">
          Shaping Tomorrow with AI, Smart Robotics and IoT
        </div>
      </div>

      <hr className="mt-6" />

      {/* <div
        className="justify-center content-center flex flex-col items-center mt-5"
        data-aos="fade-in"
      >
        <div className="flex justify-center font-bold text-2xl md:text-5xl p-5 text-gray-700">
          Why StemTec robots?
        </div>
        <div className="flex justify-center text-sm md:text-xl text-center w-11/12">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          veritatis doloribus iste cupiditate modi! Voluptatum, quo? Quae animi
          maiores esse vitae aliquam qui. Aliquid debitis cumque veritatis
          tenetur obcaecati deleniti?
        </div>
        <button
          type="button"
          className="mt-10 text-white bg-gray-900 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Our Products
        </button>
      </div> */}

      {/* <hr className="mt-10" /> */}
      <Products />
      {/* <hr className="mt-10" />
      <Courses /> */}
      <hr className="mt-10" />
      <About />
      <hr className="mt-10" />
      <Contact />
      <Footer />
    </>
  );
}

//about the product and their photo
// about the compay
// about the course page
// email id
// about us pagre photos
