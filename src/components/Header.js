
import { Navbar, NavbarBrand } from 'reactstrap'
import React from "react"
import logo from '../assets/logo.jpg'

const Header = () => {
    return(
        <>
      <Navbar
        className="my-2"
        color="purple"
      >
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={logo}
            style={{
              height: 40,
              width: 40
            }}
          />
            Welcome to the 69th Hunger Games
        </NavbarBrand>
      </Navbar>
    </>
    )

}

export default Header