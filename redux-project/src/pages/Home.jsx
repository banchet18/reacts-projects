import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/Cartslice";

const Home = () => {
  const [products, setProducts] = useState([]); //writing array in useState means data will be comming in the form of array

  const dispatch = useDispatch(); // useDispatch is a method get from redux to perform perticular function eg add or remove

  //now fetching the data using useEffect
  useEffect(() => {
    const fakeProduct = async () => {
      //using async await function
      //fetch data throw fetch
      const res = await fetch("https://fakestoreapi.com/products");
      // converting res into  json
      const data = await res.json();
      setProducts(data); // now updating product throw setProduct method
    };
    return fakeProduct;
  }, []);

  //its a add handle function it will add product to the redux store
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
