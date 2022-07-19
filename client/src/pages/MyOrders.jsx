import React from "react";
import SideBar from "../components/User/Account/SideBar";
import "../Styles/Account.css";
import "../Styles/MyOrder.css";
import UserOrders from "../components/User/UserOrder/UserOrders";
const MyOrders = () => {
  return (
    <div className='account-page-wrapper'>
      <div className='account-section'>
        <div>
          <div className='my-account'>MY ACCOUNT</div>
          <SideBar activetab={"myorders"} />
        </div>
        <div className='order-details-wrapper'>
          <UserOrders />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
