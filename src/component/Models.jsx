import React, { use } from "react";

const Models = ({ modelPromise }) => {
  const models = use(modelPromise);
  console.log(models);
  return (
    <div className="py-20 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-1">Choose Your AI Model</h2>
        <p>One subscription gives you access to all frontier AI models</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {models.map((model) => (
          <div className="shadow-lg rounded-lg border border-zinc-300 overflow-hidden ">
            <div className="flex justify-center items-center h-56 bg-zinc-200">
              <img
                className="h-40 w-40 object-contain"
                src={model.image}
                alt=""
              />
            </div>
            <div className="p-4 space-y-3">
              <h2 className="text-2xl font-bold">{model.title}</h2>
              <p className="text-gray-400">{model.description}</p>
              <div className="text-2xl font-bold">${model.price}/month</div>
              <button
                className="btn w-full bg-red-500 text-white rounded-lg
               mt-5"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
