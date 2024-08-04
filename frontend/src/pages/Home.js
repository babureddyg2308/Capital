import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }

    const fetchProducts = async () => {
        try {
            const url = "https://capital-2-mba5.onrender.com/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <div style={{display:'flex', textAlign:'center', justifyContent:'center',alignItems:'center', gap:'50px',marginBottom:'50px',margin:'50px'}}>
            <h1>Welcome {loggedInUser}</h1>
            <button onClick={handleLogout} >Logout</button>
            </div>
            <div style={{display:'flex', flexWrap:'wrap', gap:'30px'}}>
                {
                    products && products?.map((item, index) => (
                        <ul key={index} style={{border:'1px solid',padding:'10px', borderRadius:'10px'}} >
                            <img src={item.image} style={{width:'100px', marginBottom:'10px', height:'100px'}}/>
                            <p>Name:{item.name} </p>
                            <p style={{marginBottom:'10px'}}>Price:{item.price}</p>
                        </ul>
                    ))
                }
            </div>
            <ToastContainer />
        </div>
    )
}

export default Home
