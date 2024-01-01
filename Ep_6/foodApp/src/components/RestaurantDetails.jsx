/* eslint-disable react/prop-types */
import { IMAGE } from "../utils/constant";
const RestaurantDetails = ({data}) => {
    let {name ,cloudinaryImageId, avgRatingString, locality, areaName, cuisines, availability, costForTwoMessage, feeDetails } = data.cards[0].card.card.info || {}

  return (
    <>
        <section className="text-gray-700 w-screen md:w-screen lg:w-3/4 body-font border-dashed border-b-2 border-black m-10 overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex justify-center flex-wrap">
                        <img
                            alt="ecommerce"
                            className="w-60 object-cover object-center rounded border border-gray-200"
                            src={IMAGE + cloudinaryImageId}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {name}
                            </h1>
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                {locality} - {areaName}
                            </h2>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 text-red-500"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>

                                    <span className="text-gray-600 ml-3">{avgRatingString} Review</span>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                <b>Cost for Two : {costForTwoMessage}</b> <br />
                                <b>Cuisines</b> : {cuisines.join(", ")} <br />
                                <b>Availability</b> : {availability.nextCloseTime} ISD <br />
                                <b>Details </b> : {feeDetails.message} <br />
                                            
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default RestaurantDetails