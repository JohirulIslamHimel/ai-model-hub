import React, { useState } from "react";
import { toast } from "react-toastify";

const ModelCard = ({ model, setCarts, carts }) => {
  const [isSubscribed, setIsSubscribe] = useState(false);
  const handleSubscription = () => {
    setIsSubscribe(true);

    const isFound = carts.find((item) => item.id === model.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }
    setCarts([...carts, model]);
    toast("Item added to cart");
  };
  return (
    <div className="shadow-lg rounded-lg border border-zinc-300 overflow-hidden ">
      <div className="flex justify-center items-center h-56 bg-zinc-200 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 ">
        <img
          className="h-40 w-40 object-contain"
          src={model.image}
          alt={model.title}
        />
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl font-bold">{model.title}</h2>
        <p className="text-gray-400">{model.description}</p>
        <div className="text-2xl font-bold">
          ${model.price}/<span className="text-gray-400">month</span>
        </div>
        <button
          onClick={handleSubscription}
          disabled={isSubscribed}
          className={`btn w-full py-3 rounded-xl mt-5 font-bold transition-all ${
            isSubscribed
              ? "bg-green-500 text-white cursor-default"
              : "bg-red-500 hover:bg-red-600 text-white shadow-md hover:shadow-red-200"
          }`}
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
