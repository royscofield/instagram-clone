import './VerifyEmail.css'

import { useAuthValue } from '../../Auth/AuthContext'


function VerifyEmail ()
{

    const {currentUser} = useAuthValue()

    return (
        <div className='verify_email_container'>
            <div className='verify_email_wrapper'>
                <div className='verify_email_detail'>
                    <h2 className='verify_email_detail_info'>Verify your Email Address</h2>
                    <h4 className='verify_email_detail_info'>A verification email has been sent to:<span>{currentUser?.email}</span></h4>
                    <h4 className='verify_email_detail_info'>Follow the instruction in the email to verify your account</h4>
                    <div className='verify_email_detail_resend_btn'>
                        <input type={'button'} value="Resend Email" className='resend_btn'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail