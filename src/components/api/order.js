import React, { useState } from "react";
import axios from "axios";

const Order = () => {
    const [data, setData] = useState({
        productid: Math.floor(Math.random() * 100000),
        productname: "",
        productdetails: "",
        productprice: "",
        img: "",
    });
    
    const handleChange = (e) => {

        const value = e.target.value;
        setData({
        ...data,
        [e.target.name]: value,
        });
    };
    
    const handleSubmit = (e) => {
        
        const userData = {
            productid: data.productid,
        productdetails: data.productdetails,
        productname: data.productname,
        productprice: data.productprice,
        img: data.img,
        };
        axios
        .post("https://api-new-sql.herokuapp.com/products", userData)
        .then((response) => {
            console.log(response);
            if (response.status === 200) {
            console.log("success");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };
    
    return (
        <div>
        <h1>Add Product From</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Product Name:
            <input
                type="text"
                name="productname"
                value={data.productname}
                onChange={handleChange}
            />
            </label>
            <label>
            Product Details:
            <input
                type="text"
                name="productdetails"
                value={data.productdetails}
                onChange={handleChange}
            />
            </label>
            <label>
            Product Price:
            <input
                type="text"
                name="productprice"
                value={data.productprice}
                onChange={handleChange}
            />
            </label>
            <label>
            Product Image:
            <input
                type="text"
                name="img"
                value={data.img}
                onChange={handleChange}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
    }

    export default Order;