import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NewRegister from './pages/newregister/NewRegister'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutUs' element={<h1>About Us</h1>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/newregister' element={<NewRegister/>}/>
      </Routes>
    </Router>
  )
}

export default App