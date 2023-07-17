import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './Home.css'


const Home = () => {
    const [col,setCol]=useState([]);
    const [input,setInput]=useState([])
    const navigate=useNavigate()

    const getData=async()=>{
        await axios.get("http://localhost:3031/users")
        .then(res=>{
            setCol(Object.keys(res.data[0]))
            setInput(res.data)
        })

    }


     useEffect(()=>{
        getData()
        
    },[])

    const deletefun=(id)=>{
        axios.delete("http://localhost:3031/users/"+id)
        .then(res=>{
            alert("do you want to delete the data")
            navigate("/")
            
        })

    }


  return (
    <div className='main-container'>
        <div className='add'>
            <Link className='title' to="/add">ADD+</Link>

        </div>
        <table>
            <thead>
                <tr>
                    {
                        col.map((c,i)=>(
                            <th key={i}>{c}</th>

                        )

                        )
                    }
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {
                    input.map((d,i)=>(
                        <tr key={d.id}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <Link className='btn' to={`/read/${d.id}`}>Read</Link>
                            <Link className='btn' to={`/update/${d.id}`}>Update</Link>
                            <button onClick={(e)=>deletefun(d.id)}>Delete</button>
                        </tr>

                    ))
                }
            </tbody>
        </table>
       
        

    </div>
  )
}

export default Home