import { Route, Routes } from 'react-router-dom'
import LogIn from './pages/login/LogIn'
import Navbar from './components/navbar/Navbar'
import PrivateRoute from './components/PrivateRoutes'
import Home from './pages/Home/Home'
import { UseUserHook } from './hooks/UseUserHook'
import PublicRoute from './components/PublicRoute'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './redux/userSlicer'
import PageLayout from './components/pageLayout/PageLayout'
import Doctors from './pages/Doctors/Doctors'


function App() {
  const dispatch = useDispatch()
  const { user } = UseUserHook()

  useEffect(()=>{
    const token = localStorage.getItem('token')
    const checkMe = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_CHECK_USER, {
              headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          });
  
      localStorage.setItem("userName", res.data.name)
      localStorage.setItem("userID", res.data.id)
      localStorage.setItem("isAuthenticated", "true")

      dispatch(setUser({
        userName: res.data.name,
        isAuthenticated: true,
        userID: res.data.id
      }))
      } catch (error) {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        localStorage.removeItem('userID')
        localStorage.removeItem('bells')
        localStorage.removeItem('isAuthenticated')

        dispatch(setUser({
          userName: '',
          isAuthenticated: false,
          userID: null
        }))
      }
    }

    checkMe()
    
  },[dispatch])

  return (
    <PageLayout>
      {user.isAuthenticated && <Navbar />}
      <Routes>
        <Route element={<PublicRoute />}>
        <Route path='/' element={<LogIn />} />
        </Route>
      
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
        </Route>
      </Routes>
    </PageLayout>
  )
}

export default App
