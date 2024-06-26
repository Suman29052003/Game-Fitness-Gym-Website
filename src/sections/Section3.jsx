import React from 'react'
import dumbleImg from "../../public/dumble.png"
import yogaImg from "../../public/yoga.png"
import bicepsImg from "../../public/biceps.png"
import runnerImg from "../../public/runner.png"

const Section3 = () => {
  return (
    <section className='w-full min-h-[90vh] bg-[#35363a] flex justify-center items-center pb-8' id='program'>
      <div className="main-content w-[80%] grid grid-cols-2 grid-rows-2 gap-4 text-white">
        <div className="text-content-1 flex justify-center items-center ">
            <span className=" text-5xl font-semibold">The Best Programs We Offers for You</span>
        </div>
        <div className="text-content-1 flex justify-center items-center">
            <p className="text-lg leading-8 text-left">We offer a wide range of comprehensive fitness programs designed for individuals of all fitness levels. Our aim to help your achieve specific goals and maximize results.</p>
        </div>

        <div className="card-grid col-span-2 grid grid-cols-4 gap-4">
            <div className="card-1 w-full bg-[#434343] rounded-lg flex flex-col px-8 py-12 gap-3 hover:bg-[#f5622b] transition-all duration-300 hover:scale-[1.05]">
                <figure className="w-[30%] h-16 flex justify-start items-start">
                    <img src={dumbleImg} alt="" className="w-full h-full object-contain invert rotate-[140deg] flex scale-[1.5] " />
                </figure>
                <h4 className="text-white text-2xl font-bold">Strength Training</h4>
                <p className="text-white leading-7 text-left font-medium">Our Trainer will design that a progressive workout plans that proper achieve gains strength.</p>
            </div>

            <div className="card-2 w-full bg-[#434343] rounded-lg flex flex-col px-8 py-12 gap-3 hover:bg-[#f5622b] transition-all duration-300 hover:scale-[1.05]">
                <figure className="w-[30%] h-16 flex justify-start items-start">
                    <img src={yogaImg} alt="" className="w-full h-full object-contain invert flex scale-[1.5] " />
                </figure>
                <h4 className="text-white text-2xl font-bold">Basic Yoga</h4>
                <p className="text-white leading-7 text-left font-medium">This program combines yoga with cario & strength training to help lost weight and fitness.</p>
            </div>

            <div className="card-3 w-full bg-[#434343] rounded-lg flex flex-col px-8 py-12 gap-3 hover:bg-[#f5622b] transition-all duration-300 hover:scale-[1.05]">
                <figure className="w-[30%] h-16 flex justify-start items-start">
                    <img src={bicepsImg} alt="" className="w-full h-full object-contain invert flex scale-[2.5] " />
                </figure>
                <h4 className="text-white text-2xl font-bold">Body Building</h4>
                <p className="text-white leading-7 text-left font-medium">Our program focuses on advanced techniques to maximize muscle growth and definition.</p>
            </div>

            <div className="card-4 w-full bg-[#434343] rounded-lg flex flex-col px-8 py-12 gap-3 hover:bg-[#f5622b] transition-all duration-300 hover:scale-[1.05]">
                <figure className="w-[30%] h-16 flex justify-start items-start">
                    <img src={runnerImg} alt="" className="w-full h-full object-contain invert flex scale-[1.5] " />
                </figure>
                <h4 className="text-white text-2xl font-bold">Weight Loss</h4>
                <p className="text-white leading-7 text-left font-medium">This plan integrates cardio, strength training, and nutrition for effective weight loss.</p>
            </div>
            
        </div>
      </div>
    </section>
  )
}

export default Section3
