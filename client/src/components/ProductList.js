import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    console.log(props)
    return (
        <table className="table">
            <tbody>
                {props.products.map( (product, i) =>
                    <tr key={i}>
                        <td><Link to={"/products/"+product._id}>{product.title}</Link></td>
                        <td>${product.price}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
    
export default ProductList;

