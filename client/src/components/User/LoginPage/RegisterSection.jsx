import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerUser } from "../../../redux-actions/userActions";
const RegisterSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { isAuthenticated, error } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    cpassword: "",
  });

  const { name, email, gender, password, cpassword } = user;

  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      enqueueSnackbar("Password length must be atleast 8 characters", {
        variant: "error",
      });
      return;
    }
    if (password !== cpassword) {
      enqueueSnackbar("Password Doesn't Match", {
        variant: "error",
      });
      return;
    }
    if (!avatar) {
      enqueueSnackbar("Select Avatar", {
        variant: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("gender", gender);
    formData.set("password", password);
    formData.set("avatar", avatar);

    dispatch(registerUser(formData));
  };

  const handleDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      // enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, enqueueSnackbar, isAuthenticated, navigate]);

  return (
    <div className='register-section-wrapper'>
      <div className='register-title'>REGISTER</div>
      <div className='register-tag-line'>
        {"Not a member yet ? That's suprising . JOIN NOW"}{" "}
      </div>
      <div>
        <form onSubmit={handleRegister} encType='multipart/form-data'>
          <div className='register-form-wrapper'>
            {/* <!-- input container column --> */}
            <div className='text-fields'>
              <TextField
                fullWidth
                id='full-name'
                label='Full Name'
                name='name'
                value={name}
                onChange={handleDataChange}
                required
              />
              <TextField
                fullWidth
                id='registration-email'
                label='Email'
                type='email'
                name='email'
                value={email}
                onChange={handleDataChange}
                required
              />
            </div>

            {/* <!-- gender input --> */}
            <div className='register-gender-input'>
              <h4>Your Gender :</h4>
              <div className='radio-fields' id='radioInput'>
                <RadioGroup
                  row
                  aria-labelledby='radio-buttons-group-label'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    name='gender'
                    value='male'
                    onChange={handleDataChange}
                    control={<Radio required />}
                    label='Male'
                  />
                  <FormControlLabel
                    name='gender'
                    value='female'
                    onChange={handleDataChange}
                    control={<Radio required />}
                    label='Female'
                  />
                </RadioGroup>
              </div>
            </div>

            <div className='text-fields'>
              <TextField
                fullWidth
                id='registration-password'
                label='Password'
                type='password'
                name='password'
                value={password}
                onChange={handleDataChange}
                required
              />
              <TextField
                fullWidth
                id='registration-confirm-password'
                label='Confirm Password'
                type='password'
                name='cpassword'
                value={cpassword}
                onChange={handleDataChange}
                required
              />
            </div>

            <div className='avatar-section'>
              <Avatar
                alt='Avatar Preview'
                src={avatarPreview}
                sx={{ width: 60, height: 60 }}
              />
              <label>
                <input
                  type='file'
                  name='avatar'
                  accept='image/*'
                  onChange={handleDataChange}
                  className='hidden'
                />
                Choose File
              </label>
            </div>
            <div className='loginpage-btn'>
              <button type='submit'>Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterSection;
