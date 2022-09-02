import './App.css';
import DefaulLayout from './Layout/DefaulLayout/DefaulLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes/route'
import { Fragment } from 'react'

function App() {
  return (
    // <DefaulLayout />
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
