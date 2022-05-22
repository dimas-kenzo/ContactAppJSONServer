import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditProduct = () => {
    
    const [nama,setNama] = useState('');
    const [nohp,setNohp] = useState('');
    const history = useHistory();
    const  {id} = useParams();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async() => {
        const response = await fetch('http://localhost:5000/kontaks/'+id);
        const data = await response.json();
        setNama(data.nama);
        setNohp(data.nohp)
    }

    const handleEdit = async(e) => {
        e.preventDefault();
        const kontak = { nama,nohp }
        await fetch('http://localhost:5000/kontaks/'+id,{
            method : "PUT",
            body: JSON.stringify(kontak),
            headers : {
                'Content-Type' : 'application/json'
            }
        });
        history.push('/');
    }
    return (
        <div class="container">
            <div class="row g-3 py-5">
                <div class="col-5">
                    <form onSubmit={ handleEdit }>
                        <h3 class="py-2">Edit Product </h3>
                        <input class="form-control my-3" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="masukan nama" />
                        <input class="form-control my-3" type="text" value={nohp} onChange={(e) => setNohp(e.target.value)}placeholder="masukan no.hp" />
                        <button class="btn btn-success">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProduct
