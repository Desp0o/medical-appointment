import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setUser } from "../../redux/userSlicer"
import { useNavigate } from "react-router-dom"
import "./login.css"

const LogIn = () => {
  const dispatch = useDispatch()
  const redirect = useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    try {
      const res = await axios.post(import.meta.env.VITE_LOGIN, loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      console.log(res.data);

      localStorage.setItem("token", res.data.token)
      localStorage.setItem("userName", res.data.user.name)
      localStorage.setItem("userID", res.data.user.id)
      localStorage.setItem("isAuthenticated", "true")

      dispatch(setUser({
        userName: res.data.user.name,
        isAuthenticated: true
      }))
      redirect("/home")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login_page">
      <form onSubmit={handleLogin} className="login_form">
        <input 
          type="text" 
          className="login_input" 
          placeholder="user" 
          value={loginData.email} 
          name="name" 
          required
          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
        />

        <input 
          type="password" 
          className="login_input" 
          placeholder="password" 
          value={loginData.password} 
          name="password" 
          required
          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
        />

        <button className="login_button">login</button>

      </form>
    </div>
  )
}

export default LogIn