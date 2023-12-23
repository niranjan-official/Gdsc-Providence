// import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import './Events.css'
import event_logo from '../../assets/event-logo.png'

const Events = () => {
  return (
    <section id='events'>
      <div className='w-full h-full'>
        <PageHead name='Our Events' />
        <div className='w-full h-full flex lg:flex-row flex-col'>

          <div className='lg:w-1/2 lg:h-full w-full h-auto'>
            <img src={event_logo} alt="" className='lg:h-auto lg:w-full lg:relative -z-20 mt-3 lg:mt-0' />
          </div>

          <div className='lg:w-1/2 lg:h-full w-full p-4 lg:pt-16 lg:text-left text-center'>
            <p className='lg:text-3xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur soluta ut quod architecto, dignissimos iste accusantium enim libero quia sequi optio sapiente blanditiis vitae voluptatem ipsa modi quidem atque ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='w-40 text-xl mt-8 bg-blue-600 hover:bg-blue-700'>View More</button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Events
