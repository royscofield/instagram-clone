import './App.css';
import DefaulLayout from './Layout/DefaulLayout/DefaulLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/route'
import { Fragment, useState, useEffect } from 'react'
import { AuthProvider } from './Auth/AuthContext'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
// import LogIn from './Pages/LogIn/LogIn';

function App() {

    const [currentUser, setCurrentUser] = useState(null)
    const [timeActive, setTimeActive] = useState(false)

    useEffect(() => 
    {
        onAuthStateChanged(auth, (user) =>
        {
            setCurrentUser(user)
        })
    },[])

    return (
        <BrowserRouter>
            <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
                <Routes>
                            {publicRoutes.map((route, index) => {
                                let Layout = DefaulLayout

                                if(route.layout)
                                {
                                    Layout = route.layout
                                }
                                else if(route.layout === null)
                                {
                                    Layout = Fragment
                                }
                                const Page = route.component;
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                </Routes>
            </AuthProvider>
        </BrowserRouter>
  );
}

export default App;
