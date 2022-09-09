import './Signup.css'

import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import firebaseConfig from '../../firebaseConfig'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup ()
{

    // init firebase 
    const app = initializeApp(firebaseConfig)

    //init firebase auth and get the a reference to the service
    const auth = getAuth(app)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    //validate password
    const validatePassword = () =>
    {
        let isValid = true
        if(password === '')
        {
            isValid = false
            setError('Password can not be empty')
        }
        return isValid
    }

    //sign in
    const register = e => 
    {
        e.preventDefault()
        setError('')
        if(validatePassword())
        {
            //create user with email and password
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    console.log(res.user);
                    <Link to={'/'} />
                })
                .catch(err => setError(err.message))
        }
        setEmail('')
        setPassword('')
    }

    

    return (
        <div className='signup_container'>
            <div className='signup_wrapper'>
                <div className='singup_place'>
                    <div className='singup_input'>
                        <input 
                            value={email}
                            type={'text'} 
                            placeholder='Mobile number of email address' 
                            onChange={(e) => setEmail(e.target.value)}
                        />  
                    </div>
                    {/* <div className='singup_input'>
                        <input type={'text'} placeholder='Full name' />
                    </div> */}
                    {/* <div className='singup_input'>
                        <input type={'text'} placeholder='User name' />
                    </div> */}
                    <div className='singup_input'>
                        <input
                            value={password}
                            type={'text'} 
                            placeholder='Password' 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='signup_btn'>
                        <input type={'button'} value='Sign up' onClick={register}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup