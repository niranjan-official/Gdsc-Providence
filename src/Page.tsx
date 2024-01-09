import { Fragment, useEffect, useState } from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Events from './Pages/Events/Events'
import Team from './Pages/Team/Team'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'

const Page = () => {

  const [load, setLoad] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoad(false);
    }, 4000);
  }, [])

  if (!load) {
    return (
      <Fragment>

        <Home />
        <About />
        <Events />
        <Team />
        <Footer />

      </Fragment>
    )
  } else {
    return <Loading />
  }
}

export default Page