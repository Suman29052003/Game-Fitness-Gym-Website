import React from 'react'
import logo from '../../public/game_fitness_logo-removebg-preview.png'

const Navbar = () => {
  return (
    <nav className='w-full flex  h-24 bg-transparent p-8 md:p-0 items-center justify-between md:justify-around z-10 absolute mb-24'>
        <div className="logo flex h-20 items-center gap-2">
            <img src={logo} alt="" className='h-full' />
            <h1 className="text-xl font-bold text-white">Game Fitness</h1>
        </div>

        <ul className="md:flex gap-6 text-white hidden">
            <li className="cursor-pointer font-medium hover:text-red-600"><a href="#home" className="">Home</a></li>
            <li className="cursor-pointer font-medium hover:text-red-600"><a href="#aboutUs" className="">About Us</a></li>
            <li className="cursor-pointer font-medium hover:text-red-600"><a href="#program" className="">Program</a></li>
            <li className="cursor-pointer font-medium hover:text-red-600"><a href="#gallery" className="">Gallery</a></li>
            <li className="cursor-pointer font-medium hover:text-red-600"><a href="#membership" className="">Membership</a></li>
            <li className="cursor-pointer font-medium hover:text-red-600"><a href="#contact" className="">Contact</a></li>
            <li className="cursor-pointer font-medium hover:text-red-600">Sign Up</li>
        </ul>

<ul className="block md:hidden">
  <li className="invert"><span class="material-symbols-outlined">
menu
</span></li>
</ul>

    </nav>
  )
}

export default Navbar
