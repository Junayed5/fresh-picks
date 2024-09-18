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
  ];
  return (
    <div className="max-w-7xl mx-auto my-8">
      <h3 className="text-xl font-semibold ">Shopping Cart</h3>

      <div className="flex gap-5">
        <div className="w-4/6 rounded-md shadow-2xl my-3 p-5">
          <div className="flex justify-between text-lg font-semibold">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
          </div>

          <div>
            {cartProducts.map(({ image, name, price, quantity }) => (
              <>
                <div className="flex items-center">
                  <div className="flex gap-3 items-center">
                    <img className="size-28" src={image} alt="image" />
                    <div>
                      <p className="text-xl font-semibold">{name}</p>
                      <p className="text-xs font-semibold text-red-600">
                        Remove
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-56 ml-32">
                    <p>${price}.00</p>
                    <p>{quantity}</p>
                    <p>${price * quantity}.00</p>
                  </div>
                </div>
                <hr />
              </>
            ))}
          </div>
        </div>

        <div className="w-2/6 rounded-md shadow-2xl my-3 p-5">
          <h4 className="text-xl font-semibold">Order Summery</h4>

          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>100</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
