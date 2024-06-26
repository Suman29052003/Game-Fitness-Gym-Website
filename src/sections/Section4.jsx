import React from "react";
import whyUsImage from "../../public/whyUs-image.png";

const Section4 = () => {
  return (
    <section
      className="w-full min-h-[40vh] bg-[#38393d] flex justify-center items-center gap-4 pt-8 pb-8"
      id="whyUs"
    >
      <div className="w-[80%] grid grid-cols-2">
        <div className="text-container w-full text-white flex justify-center items-center flex-col gap-4">
          <h1 className="text-4xl font-bold pb-4">
            Why Should People Choose <span className="">Game Fitness</span>
          </h1>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-3">
              <h2 className="flex text-xl font-semibold gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f47340"
                >
                  <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>{" "}
                Personal Training
              </h2>
              <p className="">
                Our Personal trainers can help you create a personalized fitness
                plan and track your progress.
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="flex text-xl font-semibold gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f47340"
                >
                  <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>{" "}
                Personal Training
              </h2>
              <p className="">
                Our Personal trainers can help you create a personalized fitness
                plan and track your progress.
              </p>
            </li>
            <li className="flex flex-col gap-3">
              <h2 className="flex text-xl font-semibold gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#f47340"
                >
                  <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>{" "}
                Personal Training
              </h2>
              <p className="">
                Our Personal trainers can help you create a personalized fitness
                plan and track your progress.
              </p>
            </li>
          </ul>
        </div>

        <div className="image-container w-full flex items-center justify-center">
          <figure className="w-full">
            <img src={whyUsImage} alt="" className="w-full scale-[1.2]" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Section4;