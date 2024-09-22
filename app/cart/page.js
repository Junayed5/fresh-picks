import React from "react";

const page = () => {
  const cartProducts = [
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "Tomato",
      quantity: 1,
      price: 200,
    },
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "Tomato",
      quantity: 5,
      price: 200,
    },
    {
      image:
        "https://demo.xpeedstudio.com/marketov2/grocery/wp-content/uploads/sites/12/2018/10/4-min.jpg",
      name: "Tomato",
      quantity: 3,
      price: 200,
    },
  ];
  const tax = 5;
  const totalPrice = cartProducts.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  return (
    <div className="max-w-7xl mx-auto my-8">
      <h3 className="text-xl font-semibold ">Shopping Cart</h3>

      <div className="flex-none md:flex gap-5">
        <div className="w-full md:w-4/6 h-fit rounded-md shadow-2xl my-3 p-5">
          <div className="grid grid-cols-4 text-lg font-semibold pl-3">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>

          <div>
            {cartProducts.map(({ image, name, price, quantity }) => (
              <>
                <div className=" grid grid-cols-4 items-center">
                  <div className="flex-none md:flex gap-1 items-center ">
                    <img className="size-28" src={image} alt="image" />
                    <div>
                      <p className="text-lg font-semibold">{name}</p>
                      <p className="text-xs font-semibold text-red-600">
                        Remove
                      </p>
                    </div>
                  </div>
                  <p>${price}.00</p>
                  <p>{quantity}</p>
                  <p>${price * quantity}.00</p>

                  <div className=""></div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>

        <div className="w-full md:w-2/6 h-fit rounded-md shadow-2xl my-3 p-5">
          <h4 className="text-xl font-semibold">Order Summery</h4>

          <div className="flex justify-between text-lg font-semibold my-5 text-primaryLite">
            <p>Subtotal</p>
            <p>${totalPrice}.00</p>
          </div>
          <div className="flex justify-between text-lg font-semibold my-5 text-primaryLite">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between text-lg font-semibold my-5 text-primaryLite">
            <p>Tax</p>
            <p>${tax}.00</p>
          </div>
          <hr />
          <div className="flex justify-between text-xl font-semibold my-5 text-primaryLite">
            <p>Total</p>
            <p>${totalPrice + tax}.00</p>
          </div>
          <button className="h-10 w-full bg-primary hover:bg-secondary text-white rounded-md">
            Go To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
