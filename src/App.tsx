import { Route, Routes } from 'react-router-dom'
import LogIn from './pages/login/LogIn'
import Navbar from './components/navbar/Navbar'
import PrivateRoute from './components/PrivateRoutes'
import Home from './pages/Home/Home'
import { UseUserHook } from './hooks/UseUserHook'
import { useEffect } from 'react'


function App() {

  const { user } = UseUserHook()

  useEffect(()=>{
    console.log(user);
    
  },[user])

  return (
    <>
      {user.isAuthenticated && <Navbar />}
      <Routes>
      <Route path='/' element={<LogIn />} />
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
