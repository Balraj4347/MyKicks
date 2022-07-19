import React from "react";
import Avatar from "@mui/material/Avatar";

const AccountDetails = ({ user }) => {
  return (
    <>
      <div className='heading'>AccountDetails</div>
      <div className='account-detail-content'>
        <div className='account-detail-item'>
          <span>Name : </span>
          <span>{user.name}</span>
        </div>
        <div className='account-detail-item'>
          <span>Email : </span>
          <span>{user.email}</span>
        </div>
        <div className='account-detail-item'>
          <span>Gender : </span>
          <span>{user.gender}</span>
        </div>
        <div
          className='account-detail-item'
          style={{ display: "flex", alignItems: "center" }}
        >
          <span>Avatar : </span>
          <span>
            <Avatar
              alt='Avatar Preview'
              src={user.avatar.url}
              sx={{ width: 60, height: 60 }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
