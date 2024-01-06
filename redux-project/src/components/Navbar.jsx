import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  //useSelector always has callBack function
  //useSelector always have all states
  //state.cart comes from store
  const items = useSelector((state) => state.cart);

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
        {/* imp - for display number of items always use .length method */}
        <span style={{ fontWeight: "bolder" }}> items : {items.length}</span>
      </div>
    </div>
  );
};
export default Navbar;
