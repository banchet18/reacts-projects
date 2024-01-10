import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Cartslice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart); //same as done in home component
  const dispatch = useDispatch(); // same as home component

  //its a add handle function it will remove product to the redux store
  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h2>CartItems</h2>
      <div className="cartWrapper">
        {/* mapping the data present in store only keep in mind */}
        {cartItems.map((item) => {
          return (
            <div className="cartCard" key={item.id}>
              <img src={item.img} alt="" />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button className="btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
