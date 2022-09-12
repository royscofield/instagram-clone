import Header from "../../Layout/Header/Header"
import './Profile.css'

import {signOut} from 'firebase/auth'
import { auth } from '../../firebase'
import { useAuthValue } from '../../Auth/AuthContext'

function Profile ()
{

    const {currentUser} = useAuthValue()
    
    return (
        <div className="profileContainer">
            <div className="profileHeader">
                <Header />
            </div>

            <div className="profileMain">
                <h2>Email: {currentUser?.email}</h2>
                <h2 onClick={() => signOut(auth)} style={{cursor:"pointer"}}>Sign out</h2>
            </div> 
        </div>
    )
}

export default Profile