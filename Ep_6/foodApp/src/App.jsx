import './App.css'
import Home from './components/Home'
import Data from './components/Data'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Home />    
      <div className="container flex wrap mx-auto px-5">
        <Data />
      </div>
      <Footer />
    </>
  )
}

export default App;
