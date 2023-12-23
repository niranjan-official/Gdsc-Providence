import { Fragment } from 'react'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Events from './Pages/Events/Events'
import Team from './Pages/Team/Team'
import Footer from './components/Footer/Footer'

const Page = () => {
  return (
    <Fragment>

      <Header/>
      <Home/>
      <About/>
      <Events/>
      <Team/>
      <Footer/>

    </Fragment>
  )
}

export default Page