/* eslint-disable react/prop-types */

import Accordian from "./Accordian"

const DetailPageAccordian = ({ data }) => {
    // console.log(data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card);
    let categories = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    return (
        <div className="my-10 w-full md:w-3/4 flex justify-center items-center flex-col">
            {categories.map((val) => <Accordian data={val?.card?.card} key={val?.card?.card?.title}/>)}
        </div>
    )
}

export default DetailPageAccordian