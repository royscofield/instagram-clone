import Content from '../Content/Content'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import './DefaulLayout.css'

function DefaulLayout () {
    return (
        <div className="app">
            <div className='header'>
                <Header />
            </div>
            <div className='main'>
                <div className='content'>
                    <Content />
                </div>
                <div className='sidebar'>
                    <SideBar />
                </div>
            </div>
    </div>
    )
}

export default DefaulLayout