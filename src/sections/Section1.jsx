import React from "react";
import homeImg from "../../public/home-image.png";

const Section1 = () => {
  return (
    <section id="home" className="w-full pb-8 min-h-[100vh] bg-gradient-to-t from-[#212128] via-[#36353a] to-[#2d2c32] flex justify-center items-center shadow-lg ">
      <div className="w-full md:w-[80%] md:grid md:grid-cols-2 flex flex-col-reverse">
        <div className="text-container flex justify-center items-center flex-col gap-6">
          <h1 className="w-[80%] md:w-full font-bold text-md  md:text-6xl text-center text-white md:leading-snug">
            GET HEALTHY BODY WITH PERFECT EXERCISES
          </h1>
          <p className="text-white text-xl font-semibold w-[80%] md:w-full text-pretty">
            We are always there to help you to make a healthy body and mind
            through the power of fitness
          </p>

            <div className="tri-grid w-[80%] md:w-full grid grid-cols-3 gap-3">
        <div className="flex flex-col justify-center text-left text-white text-md md:text-xl border-r-2 border-white">
          <span className="text-orange-600 font-extrabold text-xl md:text-3xl">105+</span>
          <span className="">Fitness Program</span>
        </div>
        <div className="flex flex-col justify-center text-left text-white text-md md:text-xl border-r-2 border-white">
        <span className="text-orange-600 font-extrabold text-xl md:text-3xl">100+</span>
        <span className="">Members Joined</span>
        </div>
        <div className="flex flex-col justify-center text-left text-white text-md md:text-xl">
        <span className="text-orange-600 font-extrabold text-xl md:text-3xl">20+</span>
        <span className="">Fitness Equipments</span>
        </div>
            </div>
        </div>


        <div className="image-container w-full h-full flex justify-center items-center flex-col mt-16 md:mt-0">
          <img
            src={homeImg}
            alt=""
            className=" md:w-full h-[90%] object-cover drop-shadow-lg"
          />

          <div className="calorie-card w-[90%] md:w-[70%] h-[70px] md:h-[100px] bg-white shadow-xl rounded-lg relative bottom-7 flex items-center justify-around">
            <span class="material-symbols-outlined font-bold text-orange-500 text-4xl md:text-6xl">
              graphic_eq
            </span>
            <span className="font-semibold text-sm md:text-md">Let's Ignite Our Fitness Journey Together!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
