import React from 'react'
import goal from '../../public/goal.jpg'

const Section2 = () => {
  return (
    <section id='aboutUs' className='w-full min-h-[60vh] bg-[#38393d] flex items-center justify-center pt-8 pb-8'>
      <div className="w-[80%] grid grid-cols-2 gap-[10rem]">

        <div className="image-container w-full h-[100%] flex items-center justify-center">
            <img src={goal} alt="" className="w-[70%] h-[80%] object-cover rounded-xl" />
        </div>

        <div className="text-container flex  flex-col justify-center text-left gap-4">
            <h1 className="text-white font-bold text-5xl leading-snug ">Get Ready To Reach Your Fitness Goal</h1>
            <p className="text-white font-normal text-md leading-[30px]">Welcome to <span className="text-orange-600 font-semibold text-lg">Game Fitness</span> Gym! Our modern facility offers top-notch equipment, diverse classes, and expert trainers dedicated to helping you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, you'll find a supportive community here. Join us and transform your fitness journey at Peak Performance Gym!</p>
            <p className="text-white font-normal text-md leading-[30px]">We Believe that Everyone should have access to the benefits of exercise make it happen.</p>
            <button className="bg-red-600 w-[40%] p-4 rounded-lg text-white text-xl font-semibold hover:scale-[1.05] transition-all duration-200 hover:bg-red-700">Free Trial Today</button>
        </div>


      </div>
    </section>
  )
}

export default Section2
