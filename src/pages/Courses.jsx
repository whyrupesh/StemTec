import React from "react";
import CoursesCard from "../components/CoursesCard";

export default function Courses() {
  return (
    <div>
      <div className="text-2xl font-bold  mb-3 text-gray-700 ">Our Courses</div>

      <div className=" flex flex-col ">
        <CoursesCard
          courseName={"Robotics - Beginner"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis dolori"
          }
          img={
            "https://www.collegetransitions.com/wp-content/uploads/2023/05/Shutterstock_2159105479.jpg"
          }
        />

        <CoursesCard
          courseName={"Robotics - Programmer"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis dolori"
          }
          img={
            "https://www.springboard.com/blog/wp-content/uploads/2022/06/what-does-a-coder-do-2022-career-guide-1.jpg"
          }
        />

        <CoursesCard
          courseName={"Robotics - Builders"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt veritatis dolori"
          }
          img={
            "https://assets.aboutamazon.com/dims4/default/896c69c/2147483647/strip/true/crop/2000x1000+0+63/resize/1200x600!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fc3%2F13%2Fc4fc501e4db2b461968332e4e264%2Fgenerative-ai-training-offerings-via-training-and-certification-and-ai-ml-hero-2.jpg"
          }
        />
      </div>
    </div>
  );
}
