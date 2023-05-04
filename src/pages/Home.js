import React, { useState,useEffect } from 'react'
import './home.css'
import Bottombar from '../components/Bottombar'
import Topbar from '../components/Topbar'
import { v4 as uuidv4 } from 'uuid';



export default function Home() {
  const  [allcontact,setallcontact]= useState(JSON.parse(localStorage.getItem("contact"))||[]);
  console.log(allcontact);


  const submit= (data)=>{
    setallcontact([...allcontact,{...data,id:uuidv4()}])   
  }
  useEffect(()=>{
   localStorage.setItem("contact",JSON.stringify(allcontact))
  },[allcontact])

const d =(value)=>{
console.log(value);

const filterdData = allcontact.filter((fData)=>{
return fData.id != value
})
setallcontact(filterdData)
}

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col'></div>
            <div className='col'>
                <div> <Topbar submitdata={submit}></Topbar></div>
                {allcontact.map((data)=>(
                <div id='bottom' ><Bottombar gettingdata={data} deletes={d}></Bottombar></div>
                ))}

            </div>
            <div className='col'></div>
        </div>
    </div>
  )
}
