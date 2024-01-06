import React, { useState, useEffect } from "react";

const Home = () => {
  const [product, setProduct] = useState([]); //writing array in useState means data will be comming in the form of array

  //now fetching the data using useEffect
  useEffect(() => {
    const fakeProduct = async () => {
      //using async await function
      //fetch data throw fetch
      const res = await fetch("https://fakestoreapi.com/products");
      // converting res into  json
      const data = await res.json();
      setProduct(data);
    };
    return fakeProduct;
  }, []);
  console.log(product);

  return <div>Home</div>;
};
export default Home;
