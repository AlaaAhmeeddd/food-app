import { useContext } from "react"
import { CartContext } from "../store/cartContext"
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const notify = (name) => toast.success(`${name} removed from cart!`,{
  icon: '🗑️',
  className: 'bg-pink-900! text-white! font-semibold! shadow-none!',
  removeDelay: 1000,
})

export default function CartItems() {
    const {items, increaseQuantity, decreaseQuantity, removeItem} = useContext(CartContext)
    return (
        <>
            <Toaster />
            {items.length === 0 ? (
                <p className="p-6 text-xl text-slate-900 font-semibold relative top-[50%] translate-y-[-50%] text-center">
                    Your Cart Is Empty Now!!
                </p>
            ) : (
                <ul className="px-6">
                    {items.map( item => (
                        <li key={item.id} className="border-b border-slate-300 last:border-b-0">
                            <div className="flex justify-between items-center py-4 px-2">
                                <div className="flex flex-col gap-2">
                                    <p className="text-slate-700 font-semibold">{item.name}</p>
                                    <p className="text-pink-900 font-semibold">Price: ${item.price}</p>
                                    <div className="flex items-center gap-3">
                                        <TiPlus className="cursor-pointer" onClick={()=> increaseQuantity(item)} />
                                        <span className="text-pink-900 font-semibold">{item.quantity}</span>
                                        <TiMinus className="cursor-pointer" onClick={()=> decreaseQuantity(item)} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden">
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <FaTrashAlt className="text-lg text-red-600 hover:text-red-700 duration-300 cursor-pointer" onClick={()=> {removeItem(item); notify(item.name)}} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
