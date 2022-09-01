import './SideBar.css'
import LogoUser from '../../assets/IMG_0925.JPG'

function SideBar ()
{

    const handleClickSwitch = () =>
    {
        var following = document.getElementsByClassName('follow')
        following[0].innerHTML='Following'
    }

    return(
        <div className='containerSidebar'>
            {/* header sidebar */}
            <div className='headerSidebar'>

                <div className='imgLogo'>
                    <img alt='Image_User' src={LogoUser} className={'userLogo'}/>
                </div>

                <div className='userName'>
                    <p style={{fontWeight:'bold'}} className='userAccountName'>jineu13</p>
                    <p style={{color:'rgb(142,142,142)'}} className='profileName'>Jin___Eu</p>
                </div>

                <div className='switchAccount'>
                    <a href='/' style={{color:'rgb(46,159,247)', fontWeight:'bold'}}>Switch</a>
                </div>

            </div>
            {/* main content sidebar */}
            <div className='mainSidebar'>

                <div className='suggestion'>
                    <p style={{color:'rgb(142,142,142)', fontWeight:'bold'}}>Suggestions for you</p>
                    <p style={{fontWeight:'bold'}}>See all</p>
                </div>

                <div className='items'>
                    <div className='accountLogo'>
                        <img alt='Account_Logo' src={LogoUser} className={'account_User_Logo'}/>
                    </div>

                    <div className='userName'>
                        <p style={{fontWeight:'bold'}} className='userAccountName'>jineu13</p>
                        <p style={{color:'rgb(142,142,142)'}} className='profileName'>Follows you</p>
                    </div>

                    <div className='switchAccount'>
                        <p className='follow' style={{color:'rgb(46,159,247)', fontWeight:'bold'}} onClick={handleClickSwitch}>Follow</p>
                    </div>
                </div>

                <div className='items'>
                    <div className='accountLogo'>
                        <img alt='Account_Logo' src={LogoUser} className={'account_User_Logo'}/>
                    </div>

                    <div className='userName'>
                        <p style={{fontWeight:'bold'}} className='userAccountName'>jineu13</p>
                        <p style={{color:'rgb(142,142,142)'}} className='profileName'>Follows you</p>
                    </div>

                    <div className='switchAccount'>
                        <p  style={{color:'rgb(46,159,247)', fontWeight:'bold'}}>Follow</p>
                    </div>
                </div>

                <div className='items'>
                    <div className='accountLogo'>
                        <img alt='Account_Logo' src={LogoUser} className={'account_User_Logo'}/>
                    </div>

                    <div className='userName'>
                        <p style={{fontWeight:'bold'}} className='userAccountName'>jineu13</p>
                        <p style={{color:'rgb(142,142,142)'}} className='profileName'>Follows you</p>
                    </div>

                    <div className='switchAccount'>
                        <p style={{color:'rgb(46,159,247)', fontWeight:'bold'}}>Follow</p>
                    </div>
                </div>

                <div className='items'>
                    <div className='accountLogo'>
                        <img alt='Account_Logo' src={LogoUser} className={'account_User_Logo'}/>
                    </div>

                    <div className='userName'>
                        <p style={{fontWeight:'bold'}} className='userAccountName'>jineu13</p>
                        <p style={{color:'rgb(142,142,142)'}} className='profileName'>Follows you</p>
                    </div>

                    <div className='switchAccount'>
                        <p style={{color:'rgb(46,159,247)', fontWeight:'bold'}}>Follow</p>
                    </div>
                </div>

                <div className='items'>
                    <div className='accountLogo'>
                        <img alt='Account_Logo' src={LogoUser} className={'account_User_Logo'}/>
                    </div>

                    <div className='userName'>
                        <p style={{fontWeight:'bold'}} className='userAccountName'>jineu13</p>
                        <p style={{color:'rgb(142,142,142)'}} className='profileName'>Follows you</p>
                    </div>

                    <div className='switchAccount'>
                        <p style={{color:'rgb(46,159,247)', fontWeight:'bold'}}>Follow</p>
                    </div>
                </div>

            </div>
            {/* footer sidebar */}
            <div className='sidebar_Footer'>
                <div className='link_menu_sidebar_footer'>
                    <a href='/' className='link_sidebar_start'>About</a>
                    <a href='/' className='link_sidebar'>Help</a>
                    <a href='/' className='link_sidebar'>API</a>
                    <a href='/' className='link_sidebar'>Press</a>
                    <a href='/' className='link_sidebar'>Jobs</a>
                    <a href='/' className='link_sidebar'>Privacy</a>
                    <a href='/' className='link_sidebar'>Terms</a>
                    <br />
                    <a href='/' className='link_sidebar'>Locations</a>
                    <a href='/' className='link_sidebar_end'>Language</a>
                </div>
                <div className='copyright'>
                    <span>© 2022 INSTAGRAM FROM META</span>
                </div>
            </div>
        </div>
    )
}

export default SideBar