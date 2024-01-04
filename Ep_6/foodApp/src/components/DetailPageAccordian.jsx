/* eslint-disable react/prop-types */

import Accordian from "./Accordian"
import {useState} from 'react'
const DetailPageAccordian = ({ data }) => {
    // console.log(data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card);

    let categories = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    const [showIndex, setShowIndex] = useState(null);

   
    return (

        <div className="my-10 w-full md:w-3/4 flex justify-center items-center flex-col">

            {categories.map((val, index) => 
                <Accordian 
                    data={val?.card?.card} 
                    key={val?.card?.card?.title}
                    showIndex = {index === showIndex ? true : false }
                    index={index}
                    setShowIndex = {()=> setShowIndex(index)}
                />)}

        </div>
    )
}

export default DetailPageAccordian