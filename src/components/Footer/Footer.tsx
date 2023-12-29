// import React from 'react'
import './Footer.css'
// import icon from '../../assets/prc_icon.png'
// import instagram from '../../assets/contacts/insta.png'
// import whatsapp from '../../assets/contacts/whatsapp.png'
// import github from '../../assets/contacts/github.png'
import gdsc_logo from '../../assets/gdsc-logo.png'

const Footer = () => {
  return (
    <footer>
      <div className='w-full h-full flex lg:flex-row flex-col border-t-2 bg-white border-gray-400 p-2 justify-center lg:justify-between lg:items-stretch items-center'>

        <div className='flex flex-col mb-2'>
          <div className="flex lg:flex-row flex-col lg:items-start items-center">
            <img src={gdsc_logo} className='w-14 h-auto' alt="" />
            <div className="flex flex-col lg:ml-2 text-gray-500 relative lg:top-2 ml-2 lg:text-left text-center">
              <h1 className='lg:text-3xl text-lg text-gray-500'>Google Developer Student Clubs</h1>
              <h3 className='text-sm'>Providence College of Engineering</h3>
              <h5>Angadical South, Ala, Kerala</h5>
              <h5>689122</h5>
            </div>
          </div>
        </div>

        <hr className='lg:w-auto w-3/4' />

        {/* <div className='w-full lg:w-auto flex lg:flex-col flex-row lg:pr-10 pt-2 contacts justify-center items-center'>
          <h3 className='lg:text-4xl text-2xl text-gray-500'>Follow Us :</h3>
          <div className="flex">
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
            <img src={github} alt="" />
          </div>
        </div> */}

      </div>
    </footer>
  )
}

export default Footer
