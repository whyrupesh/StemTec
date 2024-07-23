import React from "react";
import Products from "./Products";
import Courses from "./Courses";
import About from "./About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className=" flex justify-center ">
        <img
          src="https://assets.technologynetworks.com/production/dynamic/images/content/379970/are-robots-making-humans-lazier-when-at-work-379970-960x540.jpg"
          alt="Robot Picture"
          className="w-auto"
        />
        <div className="absolute top-64 text-center text-white  text-3xl">
          Hey, We are from <span className="font-bold text-4xl">StemTec</span>.
          <div className="text-2xl ">We bring robots to life.</div>
        </div>
      </div>

      <hr className="mt-10" />

      <div className="justify-center content-center flex flex-col items-center mt-20">
        <div className="flex justify-center font-bold text-4xl p-5 text-gray-700">
          Why StemTec robots?
        </div>
        <div className="flex justify-center text-center w-11/12">
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
      </div>

      <hr className="mt-10" />
      <Products />
      <hr className="mt-10" />
      <Courses />
      <hr className="mt-10" />
      <About />
      <Footer />
    </div>
  );
}
