import React from "react";

const Card = ({ carts, setCarts, setActiveTabs }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    if (carts.length > 0) {
      alert("Payment Successful!");
      setCarts([]);
    }
  };

  // Function to remove a specific item
  const removeItem = (id) => {
    const remaining = carts.filter((item) => item.id !== id);
    setCarts(remaining);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      {/* Conditional rendering started */}
      {carts.length === 0 ? (
        // ১. If the cart is empty, only this will be displayed.
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-400">
            Your cart is feeling lonely...
          </h2>
          <button
            onClick={() => setActiveTabs("model")}
            className="mt-4 text-[#ff3377] font-bold hover:underline cursor-pointer"
          >
            Explore AI Models
          </button>
        </div>
      ) : (
        <>
          {/* If there is data in the cart, this fragment will be displayed. */}
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
                  {/* Single item delete button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-300 hover:text-red-500 text-2xl font-bold px-2 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total section */}
          <div className="flex justify-between items-center bg-linear-to-r from-black to-zinc-800 text-white p-8 mt-10 rounded-3xl shadow-2xl border-t-4 border-[#ff3377]">
            <div className="text-2xl uppercase tracking-widest text-gray-300">
              Total
            </div>
            <div className="flex items-center gap-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#ff3377] to-[#ff4d4d]">
                ${totalPrice}
              </div>
              <span className="text-lg text-gray-400">/month</span>
            </div>
          </div>

          {/* Checkout button */}
          <button
            onClick={handlePayment}
            className="w-full cursor-pointer bg-[#e50000] text-white py-4 rounded-xl font-bold text-xl shadow-[0px_10px_20px_rgba(229,0,0,0.3)] hover:bg-[#cc0000] transition-all mt-6"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
