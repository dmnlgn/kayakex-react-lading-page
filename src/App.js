import './App.css';
import Start from "./components/pages/Start";
import Offer from "./components/pages/Offer";
import Contact from "./components/pages/Contact";
import {Fragment} from "react";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <>
        <Start />
        <Offer />
        <Contact />
        <Footer />
    </>
  );
}

export default App;
