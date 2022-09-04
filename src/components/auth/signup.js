// take information form user and post to api axios signup 
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [data, setData] = useState({
        id : Math.floor(Math.random() * 100000),
        name: "",
        email: "",
       address: "",
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
            id : data.id,
        email: data.email,
        name: data.name,
        address: data.address,
        };
        axios
        .post("https://api-new-sql.herokuapp.com/users", userData)
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
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            </label>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
            </label>
            <label>
            Address:
            <input
                type="text"
                name="address"
                value={data.address}
                onChange={handleChange}
            />
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
    }


export default Signup;