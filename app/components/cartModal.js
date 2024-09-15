const CartModal = ({ toggleModal }) => {
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
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 ">
        <div className="w-full md:w-1/5 p-5 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out translate-x-0">
          <div className="p-4">
            <button
              className="text-black text-2xl font-bold bg-gray-100 px-2 rounded-full float-right hover:text-secondaryLite"
              onClick={toggleModal}
            >
              &times;
            </button>

            <h3 className="text-lg font-semibold">Shopping Cart</h3>

            <hr className="mt-2" />
          </div>

          <div>
            {cartProducts.map(({ image, name, price, quantity }) => (
              <div>
                <div className="flex justify-between px-3">
                  <img className="size-20" src={image} alt="" />
                  <p className="text-primaryLite font-semibold ">{name}</p>

                  <div className="flex items-end gap-2">
                    <p>{quantity}</p> x{" "}
                    <p className="text-primary font-semibold">
                      ${price * quantity}.00
                    </p>
                  </div>
                  <button className="text-red-300 text-lg float-right hover:text-red-500">
                    &times;
                  </button>
                </div>
                <hr />
              </div>
            ))}

            <div className="">
              <button className="h-14 w-32 bg-primaryLite hover:bg-primary font-semibold text-white rounded-full">View cart</button>
              <button className="h-14 w-32 bg-primaryLite hover:bg-primary font-semibold text-white rounded-full">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartModal;
