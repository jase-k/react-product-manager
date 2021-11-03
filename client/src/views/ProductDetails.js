import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const ProductDetails = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' +id)
            .then(res => {
                console.log(res)
                setProduct(res.data.product)
            })
            .then(console.log("PRODUCT", product))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <table className="table">
            <tbody>
                <tr>
                    <th>Title: </th>
                    <td>{product.title}</td>
                </tr>
                <tr>
                    <th>Price: </th>
                    <td>${product.price}</td>
                </tr>
                <tr>
                    <th>Description: </th>
                    <td>{product.description}</td>
                </tr>
            </tbody>
        </table>
    )
}
    
export default ProductDetails;

