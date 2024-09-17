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

      <div className="w-4/6 rounded-md shadow-2xl my-3">
        <div className="flex justify-between text-lg font-semibold">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total Price</p>
        </div>

        <div>
          {cartProducts.map(({image, name,price,quantity}) => (
            <div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
