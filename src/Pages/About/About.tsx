// import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import './About.css'
import about_logo from '../../assets/about-logo.png'

const About = () => {
  return (
    <section id='about'>
      <div className='w-full h-full flex flex-col' >
        <PageHead name='Our Goal' />
        <div className='w-full h-full flex lg:flex-row flex-col-reverse'>

          <div className='lg:w-1/2 lg:h-full w-full p-4 lg:pt-16'>
            <p className='lg:text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur soluta ut quod architecto, dignissimos iste accusantium enim libero quia sequi optio sapiente blanditiis vitae voluptatem ipsa modi quidem atque ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A incidunt possimus laborum, labore deserunt nobis voluptatem maxime.</p>
          </div>

          <div className='lg:w-1/2 lg:h-full w-full h-auto'>
            <img src={about_logo} alt="" className='lg:h-full lg:w-auto lg:relative lg:-top-16 lg:left-10 -z-20' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
