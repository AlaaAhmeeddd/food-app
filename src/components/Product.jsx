import { useContext } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CartContext } from "../store/cartContext";
import * as motion from "motion/react-client"

export default function Product({ name, image, price, dsc }) {
  const { addProduct } = useContext(CartContext)
  return (
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{
          duration: 0.1,
      }}
      className="rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 mt-4 text-center flex flex-col justify-between gap-2 relative">
        <p className="text-lg font-semibold text-pink-900">${price}</p>
        <p className="font-semibold text-slate-700">{name}</p>
        <p className="text-slate-700 text-sm">{dsc}</p>
        <MdOutlineAddShoppingCart
          className="bg-pink-900 text-white border rounded-full text-4xl p-2 cursor-pointer 
          hover:bg-pink-700 transition-all duration-300 absolute right-3 top-0"
          onClick={() => addProduct({ name, image, price })}
        />
      </div>
    </motion.div>
  )
}
