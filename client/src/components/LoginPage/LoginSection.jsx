import React from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
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
            <div className='loginpage-btn'>
              <button type='submit'>Login</button>
            </div>
            <div>
              <Link to='/password/forgot'>Forgot Password?</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSection;
