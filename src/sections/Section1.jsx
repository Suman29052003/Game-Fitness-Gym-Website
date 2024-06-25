import React from "react";
import homeImg from "../../public/home-image.png";

const Section1 = () => {
  return (
    <section id="home" className="w-full h-[100vh] bg-gradient-to-t from-[#212128] via-[#36353a] to-[#2d2c32] flex justify-center items-center shadow-lg ">
      <div className="w-[80%] grid grid-cols-2">
        <div className="text-container flex justify-center items-center flex-col gap-6">
          <h1 className="font-bold text-6xl text-white leading-snug">
            GET HEALTHY BODY WITH PERFECT EXERCISES
          </h1>
          <p className="text-white text-xl font-semibold">
            We are always there to help you to make a healthy body and mind
            through the power of fitness
          </p>
            <div className="tri-grid w-full grid grid-cols-3 gap-3">
        <div className="flex flex-col justify-center text-left text-white text-xl border-r-2 border-white">
          <span className="text-orange-600 font-extrabold text-3xl">105+</span>
          <span className="">Fitness Program</span>
        </div>
        <div className="flex flex-col justify-center text-left text-white text-xl border-r-2 border-white">
        <span className="text-orange-600 font-extrabold text-3xl">100+</span>
        <span className="">Members Joined</span>
        </div>
        <div className="flex flex-col justify-center text-left text-white text-xl">
        <span className="text-orange-600 font-extrabold text-3xl">20+</span>
        <span className="">Fitness Equipments</span>
        </div>
            </div>
        </div>


        <div className="image-container w-full h-full flex justify-center items-center flex-col">
          <img
            src={homeImg}
            alt=""
            className=" w-full h-[90%] object-cover drop-shadow-lg"
          />

          <div className="calorie-card w-[70%] h-[100px] bg-white shadow-xl rounded-lg relative bottom-7 flex items-center justify-around">
            <span class="material-symbols-outlined font-bold text-orange-500 text-6xl">
              graphic_eq
            </span>
            <span className="font-semibold text-md">Let's Ignite Our Fitness Journey Together!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
