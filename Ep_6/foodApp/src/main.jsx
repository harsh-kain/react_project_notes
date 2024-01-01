/* eslint-disable no-unused-vars */
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import RestaurantsMenu from './components/RestaurantsMenu.jsx'
import { lazy , Suspense} from 'react'
// import Grocery from './components/Grocery.jsx'



const Grocery = lazy(()=> {return import("./components/Grocery.jsx")});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <About />
      },
      {   
        path: "contact",
        element: <Contact />
      },
      {   
        path: "grocery",
        element:  <Suspense fallback={<h1>Loading.....</h1>}>  <Grocery /> </Suspense> 
      },
      {   
        path: "restaurants/:resId",
        element: <RestaurantsMenu />
      },
      
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/contact' element={<Contact />} />
//     </Route>

//   )
// )
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
