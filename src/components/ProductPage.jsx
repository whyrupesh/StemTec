import React from "react";

export default function ProductPage() {
  return (
    <div className="flex mt-5">
      <img
        src="https://cordis.europa.eu/docs/news/images/2023-03/442991.jpg"
        alt=""
      />
      <div className="m-10">
        <div className="font-bold text-4xl">Product Name</div>
        <div>StemTec</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          perspiciatis perferendis nobis, explicabo officiis sit, tempora eaque,
          laboriosam est aut aliquid nam iste deleniti cumque quasi vero
          blanditiis ut distinctio?
        </div>
      </div>
    </div>
  );
}
