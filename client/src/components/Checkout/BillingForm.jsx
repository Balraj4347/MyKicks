import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveBillingDetails } from "../../redux-actions/cartActions";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import states from "../../utils/states";

const BillingForm = ({ billingDetails }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [address, setAddress] = useState(billingDetails.address);
  const [city, setCity] = useState(billingDetails.city);
  const [country, setCountry] = useState("INDIA");
  const [state, setState] = useState(billingDetails.state);
  const [pincode, setPincode] = useState(billingDetails.pincode);
  const [phoneNo, setPhoneNo] = useState(billingDetails.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (
      phoneNo.length < 10 ||
      phoneNo.length > 10 ||
      !phoneNo.match(/^\d{10}$/)
    ) {
      enqueueSnackbar("Invalid Phone No.", { variant: "error" });
      return;
    }
    if (state === undefined) {
      enqueueSnackbar("Select a State", { variant: "error" });
      return;
    }
    dispatch(
      saveBillingDetails({
        address,
        city,
        country,
        state,
        pincode,
        phoneNo,
      })
    );
    enqueueSnackbar("Billing Details Confirmed", { variant: "success" });
    navigate("/payment");
  };

  return (
    <div className='billing-details'>
      <div className='header'>Billing Details</div>
      <form
        onSubmit={shippingSubmit}
        autoComplete='off'
        className='billing-form'
      >
        <p className='input-field'>
          <label htmlFor='address'>Street Address</label>

          <input
            type='text'
            name='address'
            id='address'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value || "");
            }}
            placeholder='Address'
            required
          />
        </p>

        <p className='input-field'>
          <label htmlFor='city'>City</label>

          <input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={(e) => {
              setCity(e.target.value || "");
            }}
            placeholder='City'
            required
          />
        </p>

        <p className='input-field'>
          <label htmlFor='country'>Country</label>

          <input
            type='text'
            name='country'
            id='country'
            value={country}
            onChange={(e) => {
              setCountry(e.target.value || "");
            }}
            disabled
            placeholder='Country'
            required
          />
        </p>

        <p className='input-field'>
          <label htmlFor='state'>State</label>

          <select
            name='state'
            id='state'
            value={state}
            onChange={(e) => {
              setState(e.target.value || "");
            }}
            placeholder='State'
            required
          >
            {states.map((item) => (
              <option key={item.code} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </p>

        <p className='input-field'>
          <label htmlFor='pincode'>Pincode</label>

          <input
            type='text'
            name='pincode'
            id='pincode'
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value || "");
            }}
            placeholder='Pincode'
            required
          />
        </p>

        <p className='input-field'>
          <label htmlFor='phoneNo'>Phone Number</label>

          <input
            type='text'
            name='phoneNo'
            id='phoneNo'
            value={phoneNo}
            onChange={(e) => {
              setPhoneNo(e.target.value || "");
            }}
            placeholder='Phone Number'
            required
          />
        </p>
        <div className='proceed-Checkout-button' style={{ maxWidth: " 900px" }}>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
