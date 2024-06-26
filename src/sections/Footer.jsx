import React from 'react'
import logo from '../../public/game_fitness_logo-removebg-preview.png'
import facebookLogo from '../../public/facebook.png'
import instagramLogo from '../../public/instagram.png'
import youtubeLogo from '../../public/youtube.png'

const Footer = () => {
  return (
    <footer className='footer w-full bg-[#38393d] h-18 flex justify-center items-center'>
      <div className="md:w-[80%] w-[90%] flex flex-col justify-around items-center">
        <div className=' flex justify-center items-center p-4'>
            <img src={logo} alt="" className='md:w-[80px] w-[50px]' />
            <span className='text-lg font-bold text-orange-700'>Game Fitness</span>
        </div>

        <div className="p-4 text-center">
            <span className='w-full text-gray-400 font-medium md:text-nowrap'>@2024 Design By Suman. All Copyrights Reserved By Game Fitness</span>
        </div>

        <div className="icons pb-4">
            <ul className="flex gap-4 aspect-auto items-center justify-center">
                <li className="facebook"><a href="https://www.facebook.com/profile.php?id=100092164006183" className=""><img src={facebookLogo} alt="" className='w-10' /></a></li>
                <li className="instagram"><a href="https://www.instagram.com/gamefitness23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className=""><img src={instagramLogo} alt="" className='w-8' /></a></li>
                <li className="youtube"><a href="https://www.youtube.com/@gamefitnessofficial" className=""><img src={youtubeLogo} alt="" className='w-8' /></a></li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
