import "./App.css";
import { Routes, Route } from "react-router-dom"; //importing router
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Routing the Home componets or pages */}
        <Route path="/cart" element={<Cart />} />
        {/* Routing the Home componets or pages */}
      </Routes>
    </>
  );
}

export default App;
