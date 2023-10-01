// import React from 'react'
import './Home.css'
import logo from '../../assets/gdsc-logo.png'
import colors from '../../assets/colors.png'
import design_1 from '../../assets/design_1.png'

const Home = () => {
  return (
    <section id='home' className='bg'>
      <div className='h-full w-full flex justify-between items-center lg:items-start home'>

        <div className='w-0 lg:w-3/12 h-full flex justify-end items-end'>
          <img src={design_1} alt="" className='h-5/6 w-auto'/>
        </div>

        <div className='flex flex-col items-center justify-center lg:justify-start text-center w-full h-full lg:w-6/12 lg:mt-20 pb-28 pl-16 lg:p-0 '>
          <img src={logo} alt="" className='w-40 h-auto' />
          <h1>Google Developers Students Club</h1>
          <h2 className='pt-3 lg:pt-0'>Providence College of Engineering</h2>
          <img src={colors} alt="" className='w-36 h-auto mt-2'/>
        </div>

        <div className='w-0 lg:w-3/12 h-full flex justify-center items-center'>
          {/* <img src={design_1} alt="" className='h-5/6 w-auto'/> */}
        </div>

      </div>
    </section>
  )
}

export default Home
