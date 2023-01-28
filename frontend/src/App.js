import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './components/Nav'
const App = () => {
  return (
    <>
    
   
      <div className='container'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Dashboard/>} exact/>
        <Route path='/login' element={<Login/>} exact/>
        <Route path='/register' element={<Register/>} exact/>
      </Routes>
      </div>
     
    
    </>
  )
}

export default App