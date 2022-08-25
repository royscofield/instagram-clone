import './App.css';
import Header from './Layout/Header/Header';
import SideBar from './Layout/SideBar/SideBar';

function App() {
  return (
    <div className="app">
        <div className='header'>
            <Header />
        </div>
        <div className='main'>
            <div className='content'>
                this is content
            </div>
            <div className='sidebar'>
                <SideBar />
            </div>
        </div>
    </div>
  );
}

export default App;
