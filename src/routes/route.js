import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import Profile from '../Pages/Profile/Profile'
import Settings from '../Pages/Settings/Settings'
import Saved from '../Pages/Saved/Saved'
import Signup from '../Pages/SignUp/Singup'
import VerifyEmail from '../Pages/VerifyEmail/VerifyEmail'

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: LogIn, layout: LogIn},
    {path: '/profile', component: Profile, layout: Profile},
    {path: '/settings', component: Settings, layout: Settings},
    {path: '/saved', component: Saved, layout: Saved},
    {path: '/signup', component: Signup, layout: Signup},
    {path: '/verify-email', component: VerifyEmail, layout: VerifyEmail},
]

export {publicRoutes}