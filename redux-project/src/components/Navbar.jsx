import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        {/* linking the componets */}
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span> items : 0</span>
      </div>
    </div>
  );
};
export default Navbar;
