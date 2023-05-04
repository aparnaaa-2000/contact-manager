import React, { useState } from 'react'
import './topbar.css'
import { Link } from 'react-router-dom';


export default function Topbar({submitdata}) {
  
  const [data,setdata]= useState({});
  // const [allcontact,setallcontact] = useState({});
  // console.log(allcontact);


  const setRegister= (event)=>{
   const name= event.target.name;
   const value = event.target.value;
    setdata({...data,[name]:value});    
  }

  console.log("user===>",data);
  const submitb =(e)=>{
    e.preventDefault()
    submitdata(data)
    console.log("username====>",data);
    //  setUser (data);
  
  }
  return (
    <div className='containerTop'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-sm-6' id='contact' ><h2 id='contact1' >Contact List</h2>
        ______________________________________________________________________
        <h5> Add Contacts </h5>
        
        <div class="form-floating mb-3" id='name'>
  <input type="username" class="form-control" id="floatingInput"  onChange={setRegister} name='Name' placeholder="name"/>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" id="floatingPassword"  onChange={setRegister} name='Email' placeholder="email"/>
  <label for="floatingPassword">Email</label>
</div><br></br>
<div><button type="button" onClick={submitb} class="btn btn-success">ADD</button></div>
      
        
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
