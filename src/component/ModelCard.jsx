import React, { useState } from "react";

const ModelCard = ({ model, setCarts, carts }) => {
  const [isSubscribed, setIsSubscribe] = useState(false);
  const handleSubscription = () => {
    setIsSubscribe(true);
    setCarts([...carts, model]);
  };
  return (
    <div className="shadow-lg rounded-lg border border-zinc-300 overflow-hidden ">
      <div className="flex justify-center items-center h-56 bg-zinc-200">
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
          className="btn w-full bg-red-500 text-white rounded-lg
               mt-5"
        >
          {isSubscribed ? "Subscribed" : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default ModelCard;
