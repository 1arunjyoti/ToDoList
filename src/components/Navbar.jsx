import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-400 text-white py-3'>
        <div className='logo'>
            <span className='font-bold text-xl mx-8'>Logo</span>
        </div>
        <ul className='flex gap-5 mx-9'>
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar

