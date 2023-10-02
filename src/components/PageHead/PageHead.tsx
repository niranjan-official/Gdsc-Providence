// import React from 'react'
import './PageHead.css'

interface Name{
  name:string,
}
const PageHead = ({name}:Name) => {
  return (
    <div className='flex lg:flex-row flex-col items-center team'>
      <hr className='lg:w-32' style={{borderColor:'#4c4ff9'}}/>
      <h1 className='pl-4 pr-4'>{name}</h1>
      <hr className='lg:w-32 w-32 ' style={{borderColor:'rgb(254 112 98)'}}/>
    </div>
  )
}

export default PageHead
