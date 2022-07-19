import React from "react";
import "../Styles/Account.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "../components/User/Account/SideBar";
import Loader from "../utils/Loader";
import AccountDetails from "../components/User/Account/AccountDetails";
const Account = () => {
  const navigate = useNavigate();

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='account-page-wrapper'>
      <div className='account-section'>
        <div>
          <div className='my-account'>MY ACCOUNT</div>
          <SideBar activetab={"accountdetails"} />
        </div>
        <div className='account-details-wrapper'>
          <AccountDetails user={user} />
        </div>
      </div>
    </div>
  );
};

export default Account;
