// import React from 'react'
import './Footer.css'
import icon from '../../assets/prc_icon.png'

const Footer = () => {
  return (
    <footer>
        <div className='w-full h-full shadow-2xl bg-slate-300 flex items-center justify-center'>
          <div className='flex justify-center'>
            <img src={icon} alt="" className='w-2/5 h-auto'/>
          </div>
        </div>
    </footer>
  )
}

export default Footer
