import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import LogIn from './pages/LogIn'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LogIn />} />
      </Routes>
      <Navbar />
    </>
  )
}

export default App
