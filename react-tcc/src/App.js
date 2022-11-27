import "./index.css"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Company from "./components/Company"
import Contact from "./components/Contact"
import Products from "./components/Products"
import Home from "./components/Home"

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Company" element={<Company/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Products" element={<Products/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App