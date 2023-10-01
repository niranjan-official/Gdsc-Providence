// import React from 'react'
import './PageHead.css'

interface Name{
  name:string
}
const PageHead = ({name}:Name) => {
  return (
    <div className='flex lg:flex-row flex-col items-center team'>
      <hr className='lg:w-32 h-1'/>
      <h1 className='pl-4 pr-4'>{name}</h1>
      <hr className='lg:w-32 w-32'/>
    </div>
  )
}

export default PageHead
