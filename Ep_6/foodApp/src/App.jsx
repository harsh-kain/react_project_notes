/* eslint-disable no-unused-vars */
import './App.css'
import Navbar from './components/Nabar'   
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import userContext from './utils/userContext'
import appStore from './utils/appStore'
import { useEffect, useState , UserContext} from 'react'
import { Provider } from 'react-redux'
function App() {
  const [userName, setUserName] = useState();

  useEffect(()=>{

    const data = {
      name : "Harsh kain",
    };

    setUserName(data.name);
  },[])

  return (
    <>
    <Provider store={appStore}>

      <userContext.Provider value={{loggedInUser: userName, setUserName}}>

      
        <Navbar />   
        <Outlet />   
        <Footer />
      </userContext.Provider>
    </Provider>

    </>
  )
}

export default App;
