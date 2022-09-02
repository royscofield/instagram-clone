import Header from "../../Layout/Header/Header"
import './Profile.css'

function Profile ()
{
    return (
        <div className="profile_container">
            <div className="profile_header">
                <Header />
            </div>

            <div className="profile_main">
                this is profile
            </div> 
        </div>
    )
}

export default Profile