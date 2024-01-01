/* eslint-disable react/prop-types */
import { IMAGE } from "../utils/constant";
const OfferCard = ({data}) => {

    let {description, header,couponCode,offerLogo} = data.info || {};
  return (
    <>
        <div className="w-56 sm:w-72 p-3 m-2 rounded-md border-2 border-slate-300">
            <div className="flex justify-start items-center ">
                <img src={IMAGE + offerLogo} alt="" className="w-8 pr-3 lg:w-10" />
                <h5 className="text-sm sm:text-base md:text-lg lg:text-lg">{header}</h5>
            </div>
            <div className="mt-2">
                <p className="text-xs sm:text-sm md:text-base lg:text-base">{description} | {couponCode}</p>
            </div>
        </div>
    </>
  )
}

export default OfferCard