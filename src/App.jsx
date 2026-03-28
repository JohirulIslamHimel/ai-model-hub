import "./App.css";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";
import Card from "./component/Card";
import Tabs from "./component/Tabs";
import { Suspense, useState } from "react";

// API call:
const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTabs, setActiveTabs] = useState("model");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Tabs activeTabs={activeTabs} setActiveTabs={setActiveTabs}></Tabs>
      <Suspense
        fallback={<span className="loading loading-spinner loading-sm"></span>}
      >
        {activeTabs === "model" && (
          <Models
            modelPromise={modelPromise}
            carts={carts}
            setCarts={setCarts}
          ></Models>
        )}
        {activeTabs === "cart" && <Card carts={carts}></Card>}
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
