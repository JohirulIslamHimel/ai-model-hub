import React from "react";

const Tabs = ({ activeTabs, setActiveTabs, carts }) => {
  return (
    <div className="tabs tabs-box justify-center bg-transparent">
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab  w-40 h-12 rounded-full font-bold transition-all px-10 py-3  shadow-lg text-white ${activeTabs === "model" ? "bg-linear-to-r from-[#ff3377] to-[#ff4d4d] " : "bg-gray-300"}    hover:opacity-90`}
        aria-label="Models"
        onClick={() => setActiveTabs("model")}
        defaultChecked
      />
      <input
        type="radio"
        name="my_tabs_1"
        className={`tab w-40 h-12 rounded-full font-bold transition-all shadow-md ${
          activeTabs === "cart"
            ? "bg-linear-to-r from-[#ff3377] to-[#ff4d4d] text-white"
            : "bg-gray-200 text-gray-600"
        }`}
        aria-label={`Cart (${carts.length})`}
        onClick={() => setActiveTabs("cart")}
      />
    </div>
  );
};

export default Tabs;
