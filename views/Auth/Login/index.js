import { useState } from 'react'
import reactDom from 'react-dom';
import { loginUser } from '../../../config/firebase';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    return (
        <div className="login-content" style={{background:red }}>

            <div className="login-form">

            <h1 class="form-title">Login</h1>
            <h2>Hi</h2>
    
            <div className="input-content">
            <input
            onChange={e => setEmail(e.target.value)}
            type="email" 
            className="form-input"
            placeholder="Write your email"/>
            
            <input
            onChange={e => setPassword(e.target.value)}
            type="password" 
            className="form-input"
            placeholder="Write your password"/>
            <input type="checkbox"
            className="form-input"/>
            
            </div>

            
            <button className="form-button" onClick={() => loginUser(email, password)}>Login</button>
            <a href="-" className="form-link">Forgot your password?</a><br/>
            <a className="form-link" href="-">Don't have an account? Create account</a>

            </div>

        </div>
    );
}

export default Login