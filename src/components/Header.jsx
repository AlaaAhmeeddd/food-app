import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import Container from "./Container";
import React, { useState } from 'react';
import Modal from "./Modal";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

export default function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='bg-[#F9F9F7] shadow-md sticky top-0 z-10'>
            <Container>
                <div className="flex items-center justify-between sticky top-0 left-0 right-0">
                    <h2 className='font-semibold text-3xl text-pink-900'>UberEats</h2>
                    <Link to={'/'} className="bg-[#DBDFD0] text-lg px-3 rounded-full"> Menu </Link>
                    <div className="flex items-center gap-5 text-slate-700">
                        <span className="border rounded-full bg-pink-900 text-white p-2 cursor-pointer 
                        hover:bg-pink-700 transition-all duration-300 "
                            onClick={handleOpenModal}
                        >
                            <FaCartShopping />
                        </span>
                        <Link to='/sign-in' className="border rounded-full bg-pink-900 text-white p-2 cursor-pointer hover:bg-pink-700 transition-all duration-300 ">
                            <IoMdPerson />
                        </Link>
                    </div>
                </div>
                <Modal show={showModal} onClose={handleCloseModal}>
                    <CartItems />
                </Modal>
            </Container>
        </div>
    )
}
