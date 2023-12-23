import './App.css'
import { Fragment } from 'react'
import Page from './Page'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from './Pages/team_info/info';

function App() {

  return (
    <Fragment>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />}/>
          <Route path="/team" element={<Info />}/>
      </Routes>
    </BrowserRouter>

    </Fragment>
  )
}

export default App
