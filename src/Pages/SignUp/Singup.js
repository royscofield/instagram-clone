import './Signup.css'
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth'
import { useAuthValue } from '../../Auth/AuthContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

function Signup ()
{


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { setTimeActive } = useAuthValue()

    //navigate
    let navigate = useNavigate()

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
                .then(() => {
                    sendEmailVerification(auth.currentUser)
                        .then(() =>
                        {
                            setTimeActive(true)
                            navigate('/verify-email')
                        })
                        .catch((err) => {alert(err.message)})
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