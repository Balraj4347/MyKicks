import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const [showNav, setshowNav] = useState(false);

  const { cartItems } = useSelector((state) => state.cart);

  const handleshowNav = () => {
    setshowNav(!showNav);
  };

  return (
    <header id='navBar-header'>
      <div id='navBar_container'>
        <div id='navBar_siteName'>
          <NavLink to='/'>
            My<b>Kicks</b>
          </NavLink>
        </div>

        <div
          className={
            showNav
              ? "navBar-collection navBar-collection-active"
              : "navBar-collection"
          }
          id='navbar-side-bar'
        >
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
        </div>
        <div
          style={{
            display: "flex",
            width: "160px",
            justifyContent: "space-around",
          }}
        >
          <div id='navBar-usersection'>
            <NavLink to='/cart'>
              <IconButton sx={{ color: "black" }}>
                <ShoppingCartIcon />
                <div id='badge'>{cartItems.length}</div>
              </IconButton>
            </NavLink>
            <NavLink to='/login'>
              <IconButton sx={{ color: "black" }}>
                {isAuthenticated ? (
                  <Avatar
                    alt='Avatar Preview'
                    src={user.avatar.url}
                    sx={{ width: 40, height: 40 }}
                  />
                ) : (
                  <AccountCircleIcon />
                )}
              </IconButton>
            </NavLink>
          </div>
          <div className='navBar-hamburger'>
            {showNav ? (
              <IconButton onClick={handleshowNav}>
                <MenuOpenIcon sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton onClick={handleshowNav}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
