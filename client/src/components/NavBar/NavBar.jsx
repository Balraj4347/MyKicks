import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div id='navBar_container'>
      <div id='navBar_siteName'>
        My<b>Kicks</b>
      </div>

      <div id='navBar-collection'>
        <div id='NewArrival'>
          <NavLink to='/'> NEW ARRIVAL </NavLink>
        </div>
        <div id='Accessories'>
          <NavLink to='/'> ACCESSORIES </NavLink>
        </div>
      </div>

      <div className='navBar-search'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input
          type='text'
          id='input'
          name='searchBox'
          placeholder='Search for NewArrival and Accessories'
        />
      </div>

      <div id='navBar-usersection'>
        <NavLink to='/'>
          <IconButton>
            <ShoppingCartIcon />
            <div id='badge'>0</div>
          </IconButton>
        </NavLink>
        <NavLink to='/'>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
