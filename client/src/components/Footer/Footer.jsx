import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.css";
import { IconButton } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";

const Footer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          enqueueSnackbar(
            "Thank you for your time. We'll look into your message",
            { variant: "success" }
          );
        },
        (error) => {
          enqueueSnackbar(error, { variant: "error" });
        }
      );
  };
  return (
    <footer id='footer-Footer'>
      <div className='footer-container'>
        <div className='footer-container-row-1'>
          <div className='footer-row-1-section'>
            <span id='compname'>MyKicks</span>
            <div className='footer-row-1-company-desc-content'>
              <ul>
                <li>
                  <span id='footer-slogan'>
                    Life isn't Perfect but your Sneaker can be
                  </span>
                </li>
                <li>
                  <LocationOnSharpIcon sx={{ fontSize: "small" }} /> Delhi
                  ,India
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-row-1-section'>
            <span id='footerHeading2'>Need Help</span>
            <div className='footer-row-1-needhelp-content'>
              <ul>
                <li>My Account</li>
                <li>Size Chart</li>
                <li>Shipping</li>
              </ul>
            </div>
          </div>
          <div className='footer-row-1-section'>
            <span id='footerHeading2'>Contact US</span>
            <div className='footer-row-1-needhelp-content'>
              <ul>
                <li>+91 9999999999</li>
                <li>Delhi , India</li>
                <li>
                  <IconButton id='footer-icon'>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton id='footer-icon'>
                    <InstagramIcon />
                  </IconButton>
                </li>
                <li>
                  <IconButton id='footer-icon'>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton id='footer-icon'>
                    <LinkedInIcon />
                  </IconButton>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-row-1-section'>
            <span id='footerHeading2'>Message Us </span>
            <div className='footer-row-1-messageus-content'>
              <form onSubmit={handleForm}>
                <div className='footer-form'>
                  <input
                    required
                    className='footer-form-fields footer-form-input'
                    type='email'
                    name='from_email'
                    id='from_email'
                    placeholder='E-Mail'
                  />
                  <input
                    required
                    className='footer-form-fields footer-form-input'
                    type='text'
                    name='from_name'
                    id='from_name'
                    placeholder='Name'
                  />

                  <textarea
                    required
                    className='footer-form-fields footer-form-input'
                    rows='4'
                    name='message'
                    id='message'
                    placeholder='Message'
                  />
                  <button
                    className='footer-form-fields footer-form-button'
                    type='submit'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='footer-container-row-2'>
          <div className='footer-row-2-content'>
            <p>
              <b>MyKicks</b> India Pvt. Ltd. © 2022 All Rights Reserved by
              Balraj Gahlot.
              <a
                href='https://github.com/Balraj4347'
                target='_blank'
                rel='noreferrer'
              >
                <span className='footer-row-2-icons'>
                  <IconButton id='footer-icon'>
                    <GitHubIcon />
                  </IconButton>
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
