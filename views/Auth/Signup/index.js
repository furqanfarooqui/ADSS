import { useState } from 'react'
import { signupUser } from '../../../config/firebase';

function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <div className="login-content">

            <div className="login-form">

            <h1 class="form-title">Create Account</h1>
    
            <div className="input-content">
                
                <input
                onChange={e => setName(e.target.value)}
                type="name" 
                className="form-input" 
                placeholder="write your name"/>
                
                <input
                onChange={e => setAge(e.target.value)}
                type="number" 
                className="form-input" 
                placeholder="write your age"/>
            
                
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

            </div>
            
            
            <button className="form-button" onClick={() => signupUser({email, password,fullName,age})}>Signup</button>

            </div>

        </div>
    );
}

export default Signup