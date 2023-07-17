import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddData = () => {

    const [data,setData]=useState({
        name:"",
        email:""
    })
    const navigate=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3031/users",data)
        .then(res=>{
            alert("do you want to add new Data")
            navigate("/")
        })

    }
  return (
    <div>
        
        <form onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" onChange={(e)=>setData({...data,name:e.target.value})}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" onChange={(e)=>setData({...data,email:e.target.value})}/>
            </div>
            <button>Submit</button>
        </form>
        </div>
  
  )
}

export default AddData