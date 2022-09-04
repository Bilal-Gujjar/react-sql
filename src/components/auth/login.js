import React, { useState } from "react";
import axios from "axios";
import Product from "../api/product";
import { Button } from "react-bootstrap";
import Home from "../home/home";

const Login = () => {


  const [products, setProducts] = useState([]);

  const [data, setData] = useState({
    email: "user1@gmail.com",
    name: "newuser",
   
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: data.email,
      name: data.name,
    };
    axios
      .post("https://api-new-sql.herokuapp.com/login", userData)
      .then((response) => {
        
        if (response.status === 200) {
       
         console.log(response.data.id);
         //props data id to product component 
     
          setProducts(
            <Product iid={response.data.id} />
          
          );
        }
      })
      .catch((error) => {
        setProducts(<h2>{error.message}{<Home/>}</h2>);
        console.log(error);
      });
  };

//get user id




  
  console.log(products);

  return (
    <div>
      <h1>Login Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="name">
          name
          <input
            type="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Login</Button>
      </form>
      {products}

    </div>
  );
};


export default Login;
