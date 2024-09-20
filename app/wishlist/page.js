import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h2 className="text-xl font-semibold ">My Wishlist</h2>

      <div className="shadow-md p-5 my-3">
        <div className="flex justify-between text-lg font-semibold">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Stock</p>
          <p>Total Price</p>
        </div>
        <div className="flex items-center">
          <div className="flex gap-3 items-center ">
            <img
              className="size-28"
              src="https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/08/2-min-300x300.jpg"
              alt="image"
            />
            <div>
              <p className="text-lg font-semibold text-primaryLite">Potato</p>
              <p className="text-xs font-semibold text-red-600">Remove</p>
            </div>
          </div>

          <div className="flex gap-56 ml-32">
            <p>$60.00</p>
            <p>4</p>
            <p className="text-primary">In stock</p>
            <p className="text-primaryLite">$240.00</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default page;
