import React, { useContext } from 'react';
import Container from './Container';
import MainTitle from './MainTitle';
import Input from './Input';
import { CartContext } from '../store/cartContext';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import useForm from '../hooks/useForm';

export default function SignIn() {
  const { totalPrice } = useContext(CartContext);
  const { formData, errors, handleChange, handleSubmit, Toaster } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: ""
  });

  return (
    <div className='bg-[#F9F9F7] h-full'>
      <Toaster />
      <Container>
        <MainTitle title="Sign In" description="Please enter your personal information to checkout." />
        <div className='bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full md:w-2/3 mx-auto'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-2'>
              <Input labelTitle="Username" inputName="name" inputValue={formData.name} handleChange={handleChange} error={errors.name} />
              <Input labelTitle="Email" inputName="email" inputValue={formData.email} handleChange={handleChange} error={errors.email} type="email" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-2'>
              <Input labelTitle="Password" inputName="password" inputValue={formData.password} handleChange={handleChange} error={errors.password} type="password" />
              <Input labelTitle="Confirm Password" inputName="confirmPassword" inputValue={formData.confirmPassword} handleChange={handleChange} error={errors.confirmPassword} type="password" />
            </div>
            <Input labelTitle="Phone Number" inputName="phoneNumber" inputValue={formData.phoneNumber} handleChange={handleChange} error={errors.phoneNumber} />

            <div className='my-4 text-slate-700 text-lg font-semibold'>
              {totalPrice === 0 ? (
                <p className='flex gap-1'>
                  Your cart is empty now! Go to our
                  <Link to='/' className='text-pink-700 flex items-center'>
                    menu <MdArrowOutward />
                  </Link> to order.
                </p>
              ) : (
                <div className="flex items-center justify-center p-2 bg-[#f8f8f8] rounded-lg mt-5 border-[2px] border-[#e9ecef]">
                  <p className="text-xl font-semibold text-slate-700 mr-2">Total Price:</p>
                  <p className="text-2xl font-bold text-pink-700">${totalPrice}</p>
                </div>
              )}
            </div>

            <button type='submit' className='bg-pink-900 w-full text-white rounded-full p-2 my-2 hover:bg-pink-700 cursor-pointer duration-300'>
              Checkout
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
