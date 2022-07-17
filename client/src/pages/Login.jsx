import React from "react";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser } from "../redux-actions/userActions";
import "../Styles/Login.css";
import Register from "../components/LoginPage/Register";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  //  const location = useLocation();

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
      <div className='login-page-wrapper'>
        <LoginSection
          handleLogin={handleLogin}
          setEmail={setEmail}
          setPassword={setPassword}
          email={email}
          password={password}
        />
        <div className='login-page-register'>
          <Register />
        </div>
      </div>
      <hr />
      <InfoFooter />
    </>
  );
};

const LoginSection = ({
  handleLogin,
  setEmail,
  setPassword,
  email,
  password,
}) => {
  return (
    <div className='login-section'>
      <div className='my-account'>MY ACCOUNT</div>
      <div className='login-title'>LOGIN</div>
      <div>
        <form onSubmit={handleLogin}>
          <div className='form-wrapper'>
            <div className='text-field-login'>
              <TextField
                fullWidth
                id='email'
                label='Email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='text-field-login'>
              <TextField
                fullWidth
                id='password'
                label='Password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='form-bottom-login'>
            <p>
              By continuing, you agree to MyKicks's{" "}
              <b style={{ color: "black" }}> Terms of Use</b> and{" "}
              <b style={{ color: "black" }}> Privacy Policy.</b>
            </p>

            <button type='submit'>Login</button>
            <div>
              <Link to='/password/forgot'>Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
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
