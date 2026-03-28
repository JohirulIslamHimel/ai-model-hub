import React from "react";

const Card = ({ carts }) => {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4 mt-5">
        {carts.map((item) => (
          <div
            className="flex items-center justify-between border-2 border-red-100 rounded-3xl p-4 bg-white shadow-sm"
            key={item.id}
          >
            <div className="flex items-center gap-5">
              <div className="bg-zinc-200 p-2 rounded-2xl">
                <img
                  className="h-20 w-20 object-contain"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="max-w-md">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm leading-snug">
                  {item.description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-3xl font-extrabold text-gray-900">
                  ${item.price}
                </div>
                <div className="text-gray-400 text-sm">per month</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl">
        <div className="">Total</div>
        <div className="">0</div>
      </div>
    </div>
  );
};

export default Card;
