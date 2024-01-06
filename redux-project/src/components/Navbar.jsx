import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
      }}
    >
      <span>Redux Project</span>
      <div>
        {/* linking the componets */}
        <Link className="navLink" to="/" style={{ fontWeight: "bolder" }}>
          Home
        </Link>
        <Link
          className="navLink"
          to="/cart"
          style={{ fontWeight: "bolder", marginRight: "10px" }}
        >
          Cart
        </Link>
        <span style={{ fontWeight: "bolder" }}> items : 0</span>
      </div>
    </div>
  );
};
export default Navbar;
