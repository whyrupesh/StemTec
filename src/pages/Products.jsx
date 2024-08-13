import React from "react";
import ProductCards from "../components/ProductCards";
import ProductCardsTwo from "../components/ProductCardsTwo";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-2xl font-bold mt-3 mb-3 text-gray-700">
        Our Products
      </div>
      <div className="flex flex-col md:flex-row">
        <ProductCardsTwo
          name={"SmartSence IoT Development Board"}
          img="./iot.jpg"
          price={3999}
          route={"IotDevelopmentBoard"}
        />

        <ProductCardsTwo
          name={"Stembot x2 AI version (Autonomous)"}
          img={"./agv.jpg"}
          price={3999}
        />

        {/* <ProductCardsTwo
          name={"Demo Product"}
          img={
            "https://wallpapers.com/images/hd/robot-head-3d-android-phone-2508ppt8010h1nf1.jpg"
          }
          price={3999}
        /> */}
      </div>
    </>
  );
}
