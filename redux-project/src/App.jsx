import "./App.css";
import { Routes, Route } from "react-router-dom"; //importing router

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element /> {/* Routing the Home componets or pages */}
        <Route path="cart" element />
        {/* Routing the Home componets or pages */}
      </Routes>
    </>
  );
}

export default App;
