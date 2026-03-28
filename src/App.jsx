import "./App.css";
import NavBar from "./component/Navbar";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Models from "./component/Models";

// API call:
const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Models modelPromise={modelPromise}></Models>
      <Footer></Footer>
    </>
  );
}

export default App;
