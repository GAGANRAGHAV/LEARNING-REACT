import React, { useState } from "react"

import './Navbar.css'
import { AiOutlineMenu } from 'react-icons/ai';


function navbar() {

  const [showmenu ,setshowmenu]=useState(false)
  
  return (<div>


    <nav className="main-nav">

      <div className="logo">

        <h2>LOGO</h2>
      </div>

      <div className={showmenu ? 'menu-link menuli' : 'menu-link'}>

        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>footer</li>
        </ul>


      </div>


      <div className="hamburger-menu">

    <AiOutlineMenu onClick={()=>setshowmenu(!showmenu)} className="toggle"/>
    {console.log(showmenu)}

    </div>
    </nav>
    
    





    
    
    </div>


  )
}

export default navbar