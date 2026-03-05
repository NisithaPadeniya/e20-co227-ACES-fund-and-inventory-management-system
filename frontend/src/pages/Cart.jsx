import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopConext";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

const Cart = () => {
  const { products, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          const itemExists = products.some((product) => product._id === item);
          if (itemExists) {
            tempData.push({
              _id: item,
              quantity: cartItems[item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);


  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr 0.5fr 0.5fr] sm:grid-cols-[4fr 2fr 0.5fr] items-center gap-4"
            >
              {/* Product Details */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                </div>
              </div>
              {/* Quantity Input */}
              <div className="flex items-center justify-center">
                <input
                  value={item.quantity}
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                        item._id,
                        Number(e.target.value)
                      )
                  }
                  className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 transform -translate-y-14"
                  type="number"
                  min={1}
                  max={productData.quantity}
                />
                <img
                  onClick={() =>
                    updateQuantity(
                      item._id,
                      0
                    )
                  }
                  className="w-4 mr-4 sm:w-5 cursor-pointer "
                  src={assets.bin_icon}
                  alt=""
                />
              </div>
              <div></div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center my-20">
        <div className="w-full text-center">
          <button
            onClick={() => {
              if (cartData.length > 0) {
                navigate("/inventory-form");
              } else {
                toast.error("No products in Cart");
                return;
              }
            }}
            className="bg-black text-white text-sm my-8 px-8 py-3"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
