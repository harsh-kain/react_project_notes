/* eslint-disable react/prop-types */
import OfferCard from "./OfferCard"

const OffersRestaurantMenu = ({ data }) => {
  let allOffer = data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
  return (
    <>
      <div className=" px-10  flex justify-center items-center flex-wrap ">
        {allOffer.map((val) => <OfferCard data={val} key={val.info.offerIds} />)}


      </div>
    </>
  )
}

export default OffersRestaurantMenu