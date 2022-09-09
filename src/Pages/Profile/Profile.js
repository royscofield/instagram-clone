import Header from "../../Layout/Header/Header"
import './Profile.css'
import ProfileAvatar from '../../assets/44884218_345707102882519_2446069589734326272_n.jpeg'
import { SettingsIconProfile } from "../../components/Icons/Index"

function Profile ()
{
    return (
        <div className="profile_container">
            <div className="profile_header">
                <Header />
            </div>

            <div className="profile_main">
                <div className="profile_header">
                    <div className="profile_avatar">
                        <img  alt="profile-avatar" src={ProfileAvatar} className='profile_avatar_class'/>
                    </div>
                    <div className="profile_header_right">
                        <div className="profile_header_right_header">
                            <p className="profile_header_username">jineu13</p>
                            <div className="edit_profile_btn">
                                <input type={'button'} value='Edit Profile' className="edit_profile"/>
                            </div>
                            <div className="profile_header_right_header_icon">
                                <SettingsIconProfile />
                            </div>
                        </div>
                        <div className="profile_header_right_detail">
                            <p className="right_detail">0 posts</p>
                            <p className="right_detail">6 followers</p>
                            <p className="right_detail">178 following</p>
                        </div>
                        <div className="profile_header_right_id">
                            <p className="username_id">Jin___Eu</p>
                        </div>
                    </div>
                </div>
                <hr className="profile_line"></hr>
                <div>

                </div>
            </div> 
        </div>
    )
}

export default Profile