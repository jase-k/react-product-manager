import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
export default () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const history = useHistory();

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/products', {
            title,
            price, 
            description
        })
        .then(res => {
            history.push("/products/"+res.data.product._id)
            return res
        })
        .then(res=> console.log(res))
        .catch(err=>console.log(err))
    }
    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler} className="form-control">
            <p className="mb-3">
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p  className="mb-3">
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p  className="mb-3">
                <label>Description</label><br/>
                <textarea onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" className="btn btn-primary"/>
        </form>
    )
}

