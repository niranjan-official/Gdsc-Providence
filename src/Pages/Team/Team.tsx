// import React from 'react'
import PageHead from '../../components/PageHead/PageHead'
import './Team.css'
import team_logo from '../../assets/team-logo.png'

const Team = () => {
  return (
    <section id='team'>
      <div className='w-full h-full'>
        <PageHead name='Our Team' />
        <div className='w-full h-full flex lg:flex-row flex-col-reverse'>

          <div className='lg:w-1/2 lg:h-full w-full p-4 lg:pt-16 flex flex-col lg:text-left text-center items-center lg:items-start'>
            <p className='lg:text-3xl '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nulla doloribus at delectus itaque, similique optio temporibus? Minima debitis temporibus ab tempore ut, voluptatum in, similique mollitia, architecto deleniti ipsam!
            </p>
            <button className='w-40 text-xl mt-8 bg-blue-600 hover:bg-blue-700'>View Team</button>
          </div>

          <div className='lg:w-1/2 lg:h-full w-full h-auto '>
            <img src={team_logo} alt="" className='lg:h-full lg:w-auto lg:relative lg:-top-16 lg:left-10 -z-20' />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Team
