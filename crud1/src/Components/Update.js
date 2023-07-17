import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [res,setRes]=useState([])

    const {id}=useParams();
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get("http://localhost:3031/users/"+id)
        .then(res=>{
            setRes(res.data)
        }).then(err=>{
            console.log(err)
        })

    },[])

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3031/users/"+id,res)
        .then(res=>{
            alert("do you want to update the data")
            navigate("/")
        })

    }
  return (
    <div>

<form onSubmit={submitHandler}>
<div>
                <label>ID:</label>
                <input type="text" name="id" disabled value={res.id} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={res.name} onChange={(e)=>setRes({...res,name:e.target.value})}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email"  value={res.email} onChange={(e)=>setRes({...res,email:e.target.value})}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Update