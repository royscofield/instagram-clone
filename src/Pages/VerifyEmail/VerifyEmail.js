import './VerifyEmail.css'

import { sendEmailVerification } from 'firebase/auth'
import { useAuthValue } from '../../Auth/AuthContext'
import { useState, useEffect } from 'react'
import { auth } from '../../firebase'

import { useNavigate } from 'react-router-dom'

function VerifyEmail ()
{

    const {currentUser} = useAuthValue()

    const [time, setTime] = useState(60)
    const {timeActive, setTimeActive} = useAuthValue()
    
    const navigate = useNavigate()

    const resendEmailVerification = () =>
    {
        sendEmailVerification(auth.currentUser)
            .then(() => 
            {
                setTimeActive(true)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    // enable resend button after 60s
    useEffect(() => 
    {
        let interval = null

        if(timeActive && time !== 0)
        {
            interval = setInterval( () =>
            {
                setTime((time) => time - 1)
            }, 1000)
        }
        else if (time === 0)
        {
            setTime(60)
            setTimeActive(false)
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    },[timeActive, time])

    useEffect(() =>
    {
        const interval = setInterval(() => 
        {
            currentUser?.reload()
                .then(() => 
                {
                    if(currentUser?.emailVerified)
                    {
                        clearInterval(interval)
                        navigate('/profile')
                    }
                })
                .catch((err) => alert(err.message))
        }, 1000)
    },[currentUser,navigate])

    return (
        <div className='verify_email_container'>
            <div className='verify_email_wrapper'>
                <div className='verify_email_detail'>
                    <h2 className='verify_email_detail_info'>Verify your Email Address</h2>
                    <h4 className='verify_email_detail_info'>A verification email has been sent to:  <span>{currentUser?.email}</span></h4>
                    <h4 className='verify_email_detail_info'>Follow the instruction in the email to verify your account</h4>
                    <div className='verify_email_detail_resend_btn'>
                        <button
                            onClick={resendEmailVerification}
                            disabled={timeActive} 
                            className='resend_btn'
                        >
                            Resend Email  
                        </button> 
                    </div>
                    {timeActive && time} 
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail