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
import { useState } from "react";

const Footer = () => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const handleForm = (e) => {
    e.preventDefault();
    setBtnDisabled(true);
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
            {
              variant: "success",
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
              },
              autoHideDuration: 5000,
            }
          );
          document.getElementById("footer-contact-form").reset();
          setBtnDisabled(false);
        },
        (error) => {
          enqueueSnackbar(error, {
            variant: "error",
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right",
            },
            autoHideDuration: 5000,
          });
          document.getElementById("footer-contact-form").reset();
          setBtnDisabled(false);
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
                <a
                  href='https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/f4f9d79e-6e47-4c0a-894c-463e9ad3e0ff/how-to-accurately-measure-your-feet-to-find-your-shoe-size.png'
                  target='_blank'
                  rel='noreferrer'
                >
                  <li>Size Chart</li>
                </a>
                <li>Shipping</li>
              </ul>
            </div>
          </div>
          <div className='footer-row-1-section'>
            <span id='footerHeading2'>Contact US</span>
            <div className='footer-row-1-needhelp-content'>
              <ul>
                <li>+91 9999999999</li>
                <li>
                  <LocationOnSharpIcon sx={{ fontSize: "small" }} /> Delhi ,
                  India
                </li>
                <li>
                  <IconButton id='footer-icon'>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton id='footer-icon'>
                    <InstagramIcon />
                  </IconButton>
                </li>
                <li>
                  <a
                    href='https://twitter.com/balrajgahlot3'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconButton id='footer-icon'>
                      <TwitterIcon />
                    </IconButton>
                  </a>
                  <a
                    href='https://www.linkedin.com/in/balrajgahlot/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <IconButton id='footer-icon'>
                      <LinkedInIcon />
                    </IconButton>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-row-1-section'>
            <span id='footerHeading2'>Message Us </span>
            <div className='footer-row-1-messageus-content'>
              <form onSubmit={handleForm} id='footer-contact-form'>
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
                    disabled={btnDisabled}
                  >
                    {btnDisabled ? "Sending.." : "Submit"}
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
