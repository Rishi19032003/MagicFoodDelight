import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo2} className='w-16 h-15 rounded-full' alt="company logo" />
      <ul className='hidden sm:flex items-center gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p>ABOUT US</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Products' className='flex flex-col items-center gap-1'>
          <p>PRODUCTS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-20'>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-12 h-10 sm:hidden' />
      </div>

      {/*Sidebar menu for small screen*/}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? `w-full` : `w-0`}`}>
        <div className='flex flex-col text-gray-600 h-full'>
          <div className='flex items-center gap-4 p-3'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <img className='h-4 rotate-90' src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/About'>ABOUT US</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/Products'>PRODUCTS</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/Contact'>CONTACT</NavLink>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Navbar;
