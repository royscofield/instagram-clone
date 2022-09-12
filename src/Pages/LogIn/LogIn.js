import './Login.css'
import InstagramLogo from '../../assets/instgram-logo.png'

import {sendEmailVerification, signInWithEmailAndPassword} from 'firebase/auth'

import {auth} from '../../firebase'

import { Link, useNavigate } from 'react-router-dom'

import { useAuthValue } from '../../Auth/AuthContext'
import { useState } from 'react'



function LogIn()
{

    const {setTimeActive} = useAuthValue()
    
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const login = e =>
    {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                if(!auth.currentUser.emailVerified) 
                {
                    sendEmailVerification(auth.currentUser)
                        .then(() => 
                        {
                            setTimeActive(true)
                                navigate('/verify-email')
                        })
                        .catch(err => alert(err.message))
                }
                else
                {
                    navigate('/')
                }
            })
            .catch(err => setError(err.message))
    }

    return (
        <div className="login_container">
            <div className="login_top">
                <div className='login_instagram_logo'>
                    <img  alt='instagram-logo' src={InstagramLogo}/>
                </div>
                <div className='login_info'>
                    <div className='login_input'>
                        <input
                            value={email} 
                            type={'text'} 
                            placeholder='Phone number, username or email address'  
                            className='login_username_input'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='login_input'>
                        <input 
                            value={password}
                            type={'text'} 
                            placeholder='Password'  
                            className='login_username_password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='login_btn'>
                        <input type={'button'} value='Log in' className='login_insta_btn' onClick={login}/>
                    </div>
                </div>
                <div className='login_top_footer'>
                    <p>OR</p>
                    <p>Forgotten your password ?</p>
                </div>
            </div>
            <div className="login_signin">
                <p>Dont't have an account? 
                    <Link to={'/signup'} style={{textDecoration:"none"}}>
                        <span className='sign_up'>Sign up</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default LogIn