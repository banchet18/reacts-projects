import "./App.css";
import { Routes, Route } from "react-router-dom"; //importing router

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element /> {/* Routing the componets or pages */}
        <Route path="cart" element />
      </Routes>
    </>
  );
}

export default App;
