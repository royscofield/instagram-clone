import './SideBar.css'
import LogoUser from '../../assets/IMG_0925.JPG'

function SideBar ()
{
    return(
        <div className='containerSidebar'>
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
            <div className='mainSidebar'>
                <div className='suggestion'>
                    <p style={{color:'rgb(142,142,142)', fontWeight:'bold'}}>Suggestions for you</p>
                    <p style={{fontWeight:'bold'}}>See all</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar