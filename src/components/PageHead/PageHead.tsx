// import React from 'react'
import './PageHead.css'
import Fade from '../../styles/fade'

interface Name{
  name:string,
}
const PageHead = ({name}:Name) => {
  return (
    <div className='flex lg:flex-row flex-col items-center team'>
      <hr className='lg:w-32 lg:block hidden' style={{borderColor:'#f9ab00'}}/>
      <Fade>
        <h1 className='pl-4 pr-4'>{name}</h1>
      </Fade>
      <hr className=' w-32 ' style={{borderColor:'#34a853'}}/>
    </div>
  )
}

export default PageHead
