import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const AddProduct = () => {
    
    const [nama,setNama] = useState('');
    const [nohp,setNohp] = useState('');
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const kontak = { nama,nohp }
        await fetch("http://localhost:5000/kontaks",{
            method : "POST",
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
                    <form onSubmit={ handleSubmit }>
                        <h3 class="py-2">Add Product </h3>
                        <input class="form-control my-3" type="text" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="masukan nama" />
                        <input class="form-control my-3" type="text" value={nohp} onChange={(e) => setNohp(e.target.value)}placeholder="masukan no.hp" />
                        <button class="btn btn-success">Simpan</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddProduct
