import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
const NavBar = () => {
  const [showNav, setshowNav] = useState(true);

  const handleshowNav = () => {
    setshowNav(!showNav);

    if (showNav) {
      document.getElementById("navbar-side-bar").style.width = "300px";
    } else {
      document.getElementById("navbar-side-bar").style.width = "0";
    }
  };

  return (
    <header id='navBar-header'>
      <div id='navBar_container'>
        <div id='navBar_siteName'>
          <NavLink to='/'>
            My<b>Kicks</b>
          </NavLink>
        </div>

        <div className='navBar-collection' id='navbar-side-bar'>
          <div className='navBar-navBtn' id='NewArrival'>
            <NavLink
              to='/newarrival'
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "1px solid black",
                      paddingBottom: "14px",
                    }
                  : undefined
              }
            >
              <IconButton disableRipple>NEW ARRIVAL</IconButton>
            </NavLink>
          </div>

          <div className='navBar-navBtn' id='Accessories'>
            <NavLink
              to='/accessories'
              style={({ isActive }) =>
                isActive
                  ? {
                      borderBottom: "1px solid black",
                      paddingBottom: "14px",
                    }
                  : undefined
              }
            >
              <IconButton disableRipple>ACCESSORIES</IconButton>
            </NavLink>
          </div>
          <div className='navBar-search'>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input
              type='text'
              id='searchBox'
              name='searchBox'
              placeholder='Search for NewArrival and Accessories'
            />
          </div>

          <div id='navBar-usersection'>
            <NavLink to='/'>
              <IconButton sx={{ color: "black" }}>
                <ShoppingCartIcon />
                <div id='badge'>0</div>
              </IconButton>
            </NavLink>
            <NavLink to='/'>
              <IconButton sx={{ color: "black" }}>
                <AccountCircleIcon />
              </IconButton>
            </NavLink>
          </div>
        </div>
        <div className='navBar-hamburger'>
          {showNav ? (
            <IconButton onClick={handleshowNav}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          ) : (
            <IconButton onClick={handleshowNav}>
              <MenuOpenIcon sx={{ color: "white" }} />
            </IconButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
