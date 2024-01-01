/* eslint-disable react/prop-types */
import { GiChickenOven } from "@react-icons/all-files/gi/GiChickenOven";
import { ImLeaf } from "@react-icons/all-files/im/ImLeaf";
const IsVeg = ({vegData}) => {
  return (
    <div>
        <h1 className="sm:text-base md:text-xl lg:text-xl py-2">{vegData ? <ImLeaf /> : <GiChickenOven />}</h1>
    </div>
  )
}

export default IsVeg