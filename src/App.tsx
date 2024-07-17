import { Route, Routes } from 'react-router-dom'
import LogIn from './pages/LogIn'
import Navbar from './components/navbar/Navbar'
import PrivateRoute from './components/PrivateRoutes'
import Home from './pages/Home/Home'


function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<LogIn />} />
        <Route element={<PrivateRoute />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
      <Navbar />
    </>
  )
}

export default App
