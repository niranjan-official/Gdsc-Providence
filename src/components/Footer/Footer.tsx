// import React from 'react'
import './Footer.css'
import icon from '../../assets/prc_icon.png'
import instagram from '../../assets/contacts/insta.png'
import whatsapp from '../../assets/contacts/whatsapp.png'
import github from '../../assets/contacts/github.png'

const Footer = () => {
  return (
    <footer>
      <div className='w-full h-full flex lg:flex-row flex-col border-t-2 border-gray-400 p-2 justify-center lg:justify-between lg:items-stretch items-center'>

        <div className='flex flex-col mb-2'>
          <img src={icon} alt="" className='lg:h-1/2 lg:w-auto w-full h-auto' />
          <div className="flex flex-row lg:flex-col lg:ml-16 ml-14 text-gray-500">
            <h5>Angadical South, Ala, Kerala</h5>
            <h5>689122</h5>
          </div>
        </div>
        <hr className='lg:w-auto w-3/4'/>

        <div className='w-full lg:w-auto flex lg:flex-col flex-row lg:pr-10 pt-2 contacts justify-center items-center'>
          <h3 className='lg:text-4xl text-2xl text-gray-500'>Follow Us :</h3>
          <div className="flex">
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={github} alt="" />
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
