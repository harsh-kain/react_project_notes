/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import { IMAGE } from "../utils/constant";
import AccordianListItems from "../components/AccordianListItems";
import { clearCart } from "../utils/cartSlice";
const CartPage = () => {
    const storeData = useSelector((store) => store.cart.items);
    const data = storeData;
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }
    return (
        <div className="w-full  flex justify-center items-center flex-col p-3">
            
            <button onClick={handleClearCart} className="bg-slate-400 px-4 py-2 rounded my-4">Clear Cart</button>

            { data.length === 0 ? <h1 className="text-3xl font-bold">Cart is empty</h1> : data.map((val) => (
                <div key={val?.info?.id} className="flex w-10/12 p-4 justify-between  items-center">
                    <div className="w-3/4 ">

                        <h1 className="font-semibold sm:">{val?.card?.info?.name}</h1>
                        <h4>₹ {val?.info?.price / 100 || val?.info?.defaultPrice / 100}</h4>
                        <p className="text-slate-500 sm:text-sm md:text-base">{val?.info?.description}</p>
                    </div>


                    <div className="w-1/4 flex relative justify-center items-center">
                        <img src={IMAGE + val?.info?.imageId} alt="" className="sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover rounded-lg relative" />
                        
                    </div>

                </div>


            ))}


        </div>
    )
}

export default CartPage