import React from 'react'
import logo from '../../public/game_fitness_logo-removebg-preview.png'
import facebookLogo from '../../public/facebook.png'
import instagramLogo from '../../public/instagram.png'
import youtubeLogo from '../../public/youtube.png'

const Footer = () => {
  return (
    <footer className='footer w-full bg-[#38393d] min-h-14 flex justify-center items-center'>
      <div className="w-[80%] flex justify-around items-center">
        <div className=' flex justify-center items-center p-4'>
            <img src={logo} alt="" className='w-[80px]' />
            <span className='text-lg font-bold text-orange-700'>Game Fitness</span>
        </div>

        <div className="">
            <span className='text-gray-400 font-medium'>@2024 Design By Suman. All Copyrights Reserved</span>
        </div>

        <div className="icons">
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
