import './Login.css'
import InstagramLogo from '../../assets/instgram-logo.png'
import AppStore from '../../assets/app-store.png'
import GgPlay from '../../assets/gg-play.png'

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
                    <p>OR</p>
                    <p className='fb'>Log in with Facebook</p>
                    <p>Forgotten your password ?</p>
                </div>
            </div>
            <div className="login_signin">
                <p>Dont't have an account? <span className='sign_up'>Sign up</span></p>
            </div>
            <div className="login_download">
                <div className='login_donwload_top'>
                    <p>Get the app.</p>
                </div>
                <div className='download_source'>
                    <img alt='app-store' src={AppStore} className='app_store'/>
                    <img alt='gg-play' src={GgPlay} className='gg_play'/>
                </div>
            </div>
        </div>
    )
}

export default LogIn