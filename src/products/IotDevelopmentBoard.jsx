import React, { useState } from "react";

export default function IotDevelopmentBoard() {
  const [selectImg, setSelectImg] = useState("./iot.jpg");
  return (
    <div className="flex mt-5 flex-col md:flex-row">
      <img src={selectImg} alt="" className="md:w-6/12" />{" "}
      <div className="flex ml-7 space-x-2 md:invisible">
        <img
          src="iot.jpg"
          alt="iot.jpg"
          className="w-20 border-2"
          onClick={() => {
            setSelectImg("iot.jpg");
          }}
        />
        <img
          src="iot2.jpg"
          alt=""
          className="w-20 border-2"
          onClick={() => {
            setSelectImg("iot2.jpg");
          }}
        />
      </div>
      <div className="m-10">
        <div className="font-bold text-4xl ">
          SmartSense IoT Development Board
        </div>
        <div className="text-gray-500">StemTec AI & Robotics PVT LTD</div>
        <div className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis perferendis nobis, explicabo officiis sit, tempora eaque,
          laboriosam est aut aliquid nam iste deleniti cumque quasi vero
          blanditiis ut distinctio?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          repellendus illum officia aperiam. Ipsam dolores consequatur
          obcaecati, facilis molestias doloremque explicabo, aliquam veritatis
          sunt vitae cum commodi placeat minima facere aut odio vero id ea
          possimus. Sit quas minima expedita dolorem eligendi ipsum
          reprehenderit sint unde quam, quidem a debitis obcaecati odit
          dignissimos molestiae, dicta illo! Voluptates dignissimos cupiditate
          sapiente labore.
        </div>

        <div className="flex ml-7 space-x-2 mt-14 collapse md:visible">
          <img
            src="iot.jpg"
            alt="iot.jpg"
            className="w-20 border-2"
            onClick={() => {
              setSelectImg("iot.jpg");
            }}
          />
          <img
            src="iot2.jpg"
            alt=""
            className="w-20 border-2"
            onClick={() => {
              setSelectImg("iot2.jpg");
            }}
          />
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:mt-8">
          Contact us ➡️
        </button>
      </div>
    </div>
  );
}
