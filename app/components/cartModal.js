"use Client";
import React, { useState } from "react";

const CartModal = ({  toggleModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 ">
        <div className="w-full md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out translate-x-0">
          <div className="p-4">
            <button
              className="text-black text-2xl float-right"
              onClick={toggleModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">
              Right-Side Fullscreen Modal
            </h2>
            <p>This modal slides in from the right.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;