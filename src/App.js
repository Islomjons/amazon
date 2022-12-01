import './App.css';
import Header from './components/header/Header';
import HeaderBottom from "./components/headerBottom/HeaderBottom"
import Backtotop from "./components/backtotop/BacktoTop"
import { Overlay } from './utils';
import Route from "./routes"
import Sidebar from './components/sidebar/Sidebar';
import { useState, useEffect } from 'react';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false)
  const [isSidebarEnter, setIsSidebarEnter] = useState(false)

  useEffect(() => {
    if(isSidebarActive){
      document.body.style.overflow = "hidden"
    }
    else{
      document.body.style.overflow = "auto"
    }
  }, [isSidebarActive])

  return (
    <div>
      <Header/>
      <HeaderBottom setIsSidebarActive={setIsSidebarActive} setIsSidebarEnter={setIsSidebarEnter}/>
      <Sidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} isSidebarEnter={isSidebarEnter} setIsSidebarEnter={setIsSidebarEnter}/>
      <Route />
      <Backtotop />
      {isSidebarActive && <Overlay type="sidebar" state={isSidebarActive} callback={setIsSidebarActive}/>}
    </div>
    );
  }
  
  export default App;
  