import './App.css'
import { Fragment } from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Events from './Pages/Events/Events'
import Team from './Pages/Team/Team'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

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

export default App
