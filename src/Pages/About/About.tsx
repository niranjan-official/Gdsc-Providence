// import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import './About.css'
import about_logo from '../../assets/about-logo.svg'
import FadeLeft from '../../styles/FadeLeft'
import FadeRight from '../../styles/FadeRight'

const About = () => {
  return (
    <section id='about' className='bg'>
      <div className='w-full h-full flex flex-col' >
        <PageHead name='Our Mission' />
        <div className='w-full h-full flex flex-col-reverse sm:flex-row '>

          <div className='lg:w-1/2 lg:h-full w-full p-4 
          sm:pb-16 flex justify-center items-center'>
          <FadeLeft>
            <p className='sm:text-3xl text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur soluta ut quod architecto, dignissimos iste accusantium enim libero quia sequi optio sapiente blanditiis vitae voluptatem ipsa modi quidem atque ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. A incidunt possimus laborum, labore deserunt nobis voluptatem maxime.</p>
          </FadeLeft>
          </div>

          <div className='lg:w-1/2 lg:h-full w-full h-auto'>
          <FadeRight>
            <img src={about_logo} alt="" className='lg:h-full lg:w-auto lg:relative lg:-top-16 lg:left-10 -z-20' />
          </FadeRight>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
