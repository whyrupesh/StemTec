import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function ProductCardsTwo({ name, img, price, route }) {
  const navigate = useNavigate();
  return (
    <div data-aos="fade-right" onClick={() => navigate(`./${route}`)}>
      <div className="relative flex h-96  md:mr-4 w-60 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <a
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          href="#"
        >
          <img
            className="object-cover  border-2 rounded-xl"
            src={img}
            alt="product image"
          />
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            new
          </span>
        </a>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
          </a>
          {/* <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ₹{price}
              </span>
              <span className="text-sm ml-2 text-slate-900 line-through">
                ₹5999
              </span>
            </p>
          </div> */}
          <a
            href="#"
            className="flex items-center justify-center rounded-md bg-indigo-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              // stroke="currentColor"
              // stroke-width="2"
            >
              <path
                // stroke-linecap="round"
                // stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
