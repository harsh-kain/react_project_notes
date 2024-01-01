import Home from '../components/Home'
import Data from '../components/Data'
const HomePage = () => {
  return (
    <>
      <Home />
      <div className="container flex wrap mx-auto px-5">
        <Data />
      </div>
    </>
  )
}

export default HomePage