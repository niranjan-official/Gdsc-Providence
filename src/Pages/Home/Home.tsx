// import React from 'react'
import './Home.css'
import logo from '../../assets/gdsc-logo.png'
import colors from '../../assets/colors.png'

const Home = () => {
  return (
    <section id='home' className='bg'>
      <div className='h-full w-full flex justify-between items-center lg:items-start home'>

        <div className='flex flex-col items-center justify-center lg:justify-start text-center p-2 w-full h-full lg:mt-20 '>
          <img src={logo} alt="" className='w-40 h-auto' />
          <h1>Google Developer Student Clubs</h1>
          <h2 className='pt-3 lg:pt-0'>Providence College of Engineering</h2>
          <img src={colors} alt="" className='w-36 h-auto mt-2'/>
        </div>

      </div>
    </section>
  )
}

export default Home
