
import React, {useState, useEffect} from "react"
import SpanLogo from '../../assets/logos/icon-spread.svg'
import './Navbar.css'

const Navigation = () => 
{
    return (
         <>
            <nav>
                <div className='nav-inner'> 
                    <span className='logo'>
                        <img src={SpanLogo}/>
                    </span>
                </div>
            </nav>
         </>
      )
}

export default Navigation

