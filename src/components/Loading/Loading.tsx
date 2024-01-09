import load from '../../assets/loading.gif'

const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <img src={load} className='w-40 h-auto'/>
    </div>
  )
}

export default Loading
