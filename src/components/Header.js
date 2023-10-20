
import { Navbar, NavbarBrand } from 'reactstrap'
import React from "react"
import logo from '../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <>
      
      <Navbar
        className="my-2"
       class="navbar navbar-default navbar-brand"
      >
        <h3> Welcome to the 69th Hunger Games </h3>

        <NavbarBrand href="/">
    
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40
            }}
          />

        </NavbarBrand>
        <div className="nav-link">
        <NavLink to="/tributeindex">See the Tributes!</NavLink>
        <br></br>
        <NavLink to="/tributenew">Add a New Tribute</NavLink>
        </div>
      </Navbar>
    </>
    )

}

export default Header