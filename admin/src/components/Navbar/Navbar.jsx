import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='w-4/5 mx-auto flex justify-between items-center '>
        <img className='' src={assets.logo} alt="" />
        <img className='h-14' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar