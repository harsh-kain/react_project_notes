import Data from '../components/Data'
import Minicrousel from '../components/Minicrousel'
import TopRestaurants from '../components/TopRestaurants'
const HomePage = () => {
  return (
    <>

      <div className="flex w-full my-9 justify-center items-center">
        <Minicrousel />
      </div>
      <div className="flex justify-center items-center ">
        <TopRestaurants />
      </div>

      <div className="container flex  wrap mx-auto px-5">
        <Data />
      </div>
    </>
  )
}

export default HomePage