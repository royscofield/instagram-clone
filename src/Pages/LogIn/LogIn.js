import './Login.css'
import InstagramLogo from '../../assets/instgram-logo.png'

function LogIn()
{
    return (
        <div className="login_container">
            <div className="login_top">
                <div className='login_instagram_logo'>
                    <img  alt='instagram-logo' src={InstagramLogo}/>
                </div>
                <div className='login_username'>
                    <input type={'text'} placeholder='Phone number, username or email address'  className='login_username_input'/>
                </div>
                <div className='login_password'>
                    <input type={'text'} placeholder='Password'  className='login_username_password'/>
                </div>
                <div className='login_btn'>
                    <input type={'button'} value='Log in' className='login_insta_btn' />
                </div>
                <div className='login_top_footer'>

                </div>
            </div>
            <div className="login_signin">
                this is sign in
            </div>
            <div className="login_download">
                this is download
            </div>
        </div>
    )
}

export default LogIn