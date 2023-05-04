import React from 'react'
import './bottombar.css'
import { Link } from 'react-router-dom'


export default function  Bottombar({gettingdata,deletes}) {
  console.log(gettingdata);

  return (

    <div className='containerBottom'>
        <div className='row'>
            <div className='col'></div>
            <div className='col-sm-6' id='main'>
                <div className='row'>
                  <div className='col' id='person'>
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="30" fill="currentColor"id='person' class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></div>
<div className='col'>{gettingdata.Name} <br></br>
{gettingdata.Email}
</div>
<div className='col' id='trash'><svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{deletes(gettingdata.id)}} width="75" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></div></div>
            </div>
            <div className='col'></div>
        </div>
    </div>
  )
}
