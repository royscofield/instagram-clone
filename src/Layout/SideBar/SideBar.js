import './SideBar.css'
import LogoUser from '../../assets/44884218_345707102882519_2446069589734326272_n.jpeg'

import { useAuthValue } from '../../Auth/AuthContext'

function SideBar ()
{
    const {currentUser} = useAuthValue() 

    return(
        <div className='containerSidebar'>
            {/* header sidebar */}
            <div className='headerSidebar'>

                <div className='imgLogo'>
                    <img alt='Image_User' src={LogoUser} className={'userLogo'}/>
                </div>

                <div className='userName'>
                    <p style={{fontWeight:'bold'}} className='userAccountName'>{currentUser?.email}</p>
                </div>

            </div>
        </div>
    )
}

export default SideBar