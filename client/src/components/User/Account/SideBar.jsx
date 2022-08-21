import React from "react";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../../redux-actions/userActions";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = ({ activetab }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className='user-sidebar-wrapper'>
      <div className='sidebar-content'>
        <Link to='/account'>
          <div
            className='sidebar-item'
            style={activetab === "accountdetails" ? { color: "black" } : {}}
          >
            <p>Account Details</p>
            <ManageAccountsIcon />
          </div>
        </Link>
        <Link to='/orders'>
          <div
            className='sidebar-item'
            style={activetab === "myorders" ? { color: "black" } : {}}
          >
            <p>My Orders</p>
            <LocalShippingIcon />
          </div>
        </Link>

        <div
          className='sidebar-item'
          style={activetab === "logout" ? { color: "black" } : {}}
          onClick={handleLogout}
        >
          <p>Logout</p>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
