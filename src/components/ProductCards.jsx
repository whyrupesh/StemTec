import React from "react";

export default function ProductCards({ productName, description, img }) {
  return (
    <div>
      <div className="max-w-sm w-64 bg-white border m-4 border-gray-200 rounded-lg shadow dark:bg-white-950 dark:border-blue-700">
        <a href="#">
          <img className="rounded-t-lg " src={img} alt="product_img" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-indigo-950">
              {productName}
            </h5>
          </a>
          <p className="mb-3 text-sm font-normal text-gray-950 dark:text-gray-700">
            {description}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              {/* <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              /> */}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// RMA - REturn merchanside authorization
// img, orderid, name, phone number, desctiption
