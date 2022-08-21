import React from "react";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser } from "../redux-actions/userActions";
import "../Styles/Login.css";
import Loader from "../utils/Loader";
import LoginSection from "../components/User/LoginPage/LoginSection";
import RegisterSection from "../components/User/LoginPage/RegisterSection";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const redirect = location.search ? location.search.split("=")[1] : "account";

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`/${redirect}`);
    }
  }, [dispatch, error, isAuthenticated, redirect, navigate]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='login-page-wrapper'>
            <LoginSection
              handleLogin={handleLogin}
              setEmail={setEmail}
              setPassword={setPassword}
              email={email}
              password={password}
            />

            <RegisterSection />
          </div>
          <hr />
          <InfoFooter />
        </>
      )}
    </>
  );
};

const InfoFooter = () => {
  return (
    <div className='cart-page-footer'>
      <div className='shipping'>
        <p>India-wide Shipping</p>
        <h6>Average time: 4-6 days</h6>
      </div>
      <div className='secure'>
        <p>100% Secure Checkout</p>
      </div>
    </div>
  );
};

export default Login;
