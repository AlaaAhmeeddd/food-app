import { IoClose } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useState } from "react";
import { CartContext } from "../store/cartContext";
import { Link } from "react-router-dom";
import * as motion from "motion/react-client"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success(`Your cart is empty now!`,{
  icon: '✅',
  className: 'bg-pink-900! text-white! font-semibold! shadow-none!',
  removeDelay: 1000,
})

function Modal({ show, onClose, children }) {
  const { clearCart, totalPrice } = useContext(CartContext)
  const [isClosing, setIsClosing] = useState(false);


  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400); 
  };


  if (!show) {
    return null;
  }

  return (
    <>
    <Toaster />
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50" />
      <motion.div
        initial={{ right: isClosing ? 0 : "-100%" }}
        animate={{ right: isClosing ? '-100%' : 0 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        className="fixed top-0 right-0 z-20 md:w-[400px] w-[300px] h-screen bg-white rounded-l-2xl"
      >
        <div className="px-6 sticky top-0 left-0 right-0 bg-white z-10">
          <div className="border-b-2 border-slate-200 flex items-center justify-between p-6">
            <p className="flex items-center gap-2 text-3xl font-semibold text-slate-700">
              <span className="text-pink-900"><FaCartShopping /></span> Cart
            </p>
            <IoClose onClick={handleClose} className="text-3xl text-pink-900 cursor-pointer hover:text-pink-700 hover:text-4xl duration-300" />

          </div></div>
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {children}
        </div>
        <div className="px-6 pb-6 text-slate-700 sticky bottom-0 left-0 right-0 bg-white shadow-sm z-10">
          <div className="flex items-center justify-between px-6 py-4 border-t-2 border-slate-200">
            <p className="text-xl font-semibold">Total Price:</p>
            <p className="text-xl font-semibold">${totalPrice}</p>
          </div>
          <div className="flex items-center justify-between px-6">
            <button className="bg-rose-600 text-white px-3 py-1 cursor-pointer rounded-lg hover:bg-rose-700
             transition-all duration-300 font-semibold mr-2" onClick={()=> {clearCart(); notify()}}>
              Clear
            </button>
            <Link to={'sign-in'} className="bg-green-600 text-white px-3 py-1 cursor-pointer rounded-lg hover:bg-green-700
             transition-all duration-300 font-semibold">
              Checkout
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Modal;
