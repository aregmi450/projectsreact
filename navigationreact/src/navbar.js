import React, { useState } from 'react'

export default function Navbar() {

    //first hook to check status of navbar 
    const [navStatus, setnavStatus]= useState(0)
    const [divwidth, setdivwidth]= useState('')


    function opennav()
    {
        if(navStatus===0)
        {
            setdivwidth('100%')
            setnavStatus(1)
        }else{
            setdivwidth('0px')
            setnavStatus(0)
        }
    }
    return(
        <div>
            <div className='main-div' style={{width:divwidth}}>
                <button onClick={opennav} ><i class="fas fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                   
                </ul>
            </div>
        </div>
    )
}