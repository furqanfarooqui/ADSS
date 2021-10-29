import { useState } from 'react'
import { registerUser, loginUser } from '../../config/firebase'
import './index.css'

function Auth( {updateUser} ) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setName] = useState('')
  const [age, setAge] = useState('')

  const [screen, setScreen] = useState("login")

  const login = () =>{
    setScreen("login")
  }
  
  const signup = () =>{
    setScreen("signup")
  }

  const regUser = async () =>{
    try{
      const uid = await registerUser({email, password, fullName, age})
      console.log("uid", uid)
      alert("Account successfully created")
      setScreen("login")
    }
    catch(e){
      alert(e.message)
    }
  }

  const LoginUser = async() =>{
    try{
    const user = await loginUser(email, password)
    console.log("user data from loginuser==>", user)
    updateUser(user)
    alert("Successfully Logged In")
    }
    catch(e){
      alert(e.message)
    }
  }
 
  return <div className='body'>
    <div className='card'>
    <>{
            screen === "login" && 
            <>
            <h1>Login</h1><br/>

            <input
            onChange={e => setEmail(e.target.value)}
            type="email" placeholder="Enter your email" /><br />

            <input
            onChange={e => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" /><br />

            <button className='button' onClick={LoginUser}>Login</button><br/>
            <button className='url' onClick={signup}>click here for signup</button>
            </>
          }
          {
            screen === "signup" && <>
            <h1>Sign up</h1><br/>

            <input
            onChange={e => setName(e.target.value)}
            type="name" placeholder="Enter your name" /><br/>

            <input
            onChange={e => setAge(e.target.value)}
            type="number" placeholder="Enter your age" /><br/>

            <input
            onChange={e => setEmail(e.target.value)}
            type="email" placeholder="Enter your email" /><br/>

            <input
            onChange={e => setPassword(e.target.value)}
            type="password" placeholder="Enter your password" /><br/>

            <button className='button' onClick={regUser}>Sign up</button><br/>
            <button className='url' onClick={login}>click here for login</button>
            </>
          }</>
    </div>
  </div>
}

export default Auth