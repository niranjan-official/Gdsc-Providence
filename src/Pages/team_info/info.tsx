import Header from '../../components/Header/Header'
import member from '../../assets/team/name.webp'
import { useEffect } from 'react'

interface Member{
  name: string,
  role: string,
  description: string,
  image: string
}
const Info = () => {

  useEffect(()=>{
    window.scrollTo({
      top:0
  })
  },[])
  const members:Member[] = [
    {
      name: "Anand Sudeep",
      role: "GDSC Lead",
      description: "Computer Engineering Student | Front End Developer | Linux Enthusiast | Community taught Graphic Designer and Photographer | Exploring the tech world",
      image: member,
    },
    {
      name: "Alen Koshy",
      role: "Tech Lead",
      description: "Computer Engineering Student | Front End Developer | Linux Enthusiast | Community taught Graphic Designer and Photographer | Exploring the tech world",
      image: member,
    },
    {
      name: "Shan John",
      role: "Design Lead",
      description: "Computer Engineering Student | Front End Developer | Linux Enthusiast | Community taught Graphic Designer and Photographer | Exploring the tech world",
      image: member,
    },
  ]
  return (
    <div className='h-max w-screen'>
        <Header/>
        <div className='w-full flex flex-col mt-4'>
          <div className='flex flex-col p-5 justify-center items-center'>
            <h1 className='text-4xl'>GDSC 2023-24</h1>
            <h2 className='text-2xl '>Team Members</h2>
          </div>
          <div className='flex flex-col sm:flex-row sm:flex-wrap items-center sm:justify-evenly p-12 pt-4'>
            {
              members.map((obj,key)=>(
                <div key={key} className='w-full md:w-1/3 lg:w-1/4 h-max flex flex-col shadow-md shadow-slate-500 rounded-lg mb-6 sm:mb-10 sm:mr-8'>
                    <div className='flex justify-center bg-blue-500 w-full h-2/3'>
                      <div className='rounded-full h-32 w-32 bg-white relative -bottom-16 shadow-md'>
                        <img src={obj.image} className='w-full h-full' alt="" />
                      </div>
                    </div>
                    <div className='flex flex-col mt-10 items-center p-4'>``
                      <h1 className='text-2xl font-semibold'>{obj.name}</h1>
                      <h2 className='text-lg'>{obj.role}</h2>
                      <h3 className='mt-3 text-center'>{obj.description}</h3>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default Info