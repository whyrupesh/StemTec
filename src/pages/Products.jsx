import React from "react";
import ProductCards from "../components/ProductCards";

export default function Products() {
  return (
    <>
      <div className="text-3xl font-bold mt-3 mb-3 text-gray-700">
        Our Products
      </div>
      <div className="flex flex-row space-x-3">
        <ProductCards
          productName={"Robotic Dustbin"}
          img={
            "https://img.rolandberger.com/content_assets/content_images/captions/Roland_Berger-24_2195_Humanoid_robots-IT_image_caption_none.jpg"
          }
          description={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
        />

        <ProductCards
          productName={"Chiti Robo - F"}
          img={
            "https://img.rolandberger.com/content_assets/content_images/captions/Roland_Berger-24_2195_Humanoid_robots-IT_image_caption_none.jpg"
          }
          description={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
        />

        <ProductCards
          productName={"Chiti Robo - F"}
          img={
            "https://img.rolandberger.com/content_assets/content_images/captions/Roland_Berger-24_2195_Humanoid_robots-IT_image_caption_none.jpg"
          }
          description={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
        />

        <ProductCards
          productName={"Chiti Robo - F"}
          img={
            "https://img.rolandberger.com/content_assets/content_images/captions/Roland_Berger-24_2195_Humanoid_robots-IT_image_caption_none.jpg"
          }
          description={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
        />

        <ProductCards
          productName={"Chiti Robo - F"}
          img={
            "https://img.rolandberger.com/content_assets/content_images/captions/Roland_Berger-24_2195_Humanoid_robots-IT_image_caption_none.jpg"
          }
          description={
            "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
          }
        />
      </div>
    </>
  );
}
