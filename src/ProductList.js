import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const response = await fetch("http://localhost:5000/kontaks");
        const data = await response.json();
        setProducts(data);
    }

    const deleteProd = async(id) => {
        await fetch('http://localhost:5000/kontaks/'+id,{
            method : "DELETE",
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        fetchData();
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h3 class="py-3">List Product</h3>
                    <Link to="/add" class="btn btn-primary my-3">Add Product</Link>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama</th>
                                <th>No HP</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            { products.map((product, index) => (
                            <tr key={ product.id}>
                                <td>{ index+1 }</td>
                                <td>{product.nama}</td>
                                <td>{product.nohp}</td>
                                <td>
                                    <Link to={'edit/'+product.id} class="btn btn-info mx-2">Update</Link>
                                    <button onClick={() => deleteProd(product.id)} class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            </div>
        </div>
    )
}

export default ProductList
