import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]); //writing array in useState means data will be comming in the form of array

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

  return (
    <div>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default Home;
