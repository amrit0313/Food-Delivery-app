import { useRef, useState } from "react";
import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const hasTenChar = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFOrmInputsValidity] = useState({
    name: true,
    street: true,
    phone: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const phoneInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreedIsValid = !isEmpty(enteredStreet);
    const enteredPhoneIsValid = hasTenChar(enteredPhone);

    setFOrmInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreedIsValid,
      phone: enteredPhoneIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreedIsValid &&
      enteredCityIsValid &&
      enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      phone: enteredPhone,
    });
  };

  const nameControl = `${classes.control}  ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControl = `${classes.control}  ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const phoneControl = `${classes.control}  ${
    formInputsValidity.phone ? "" : classes.invalid
  }`;
  const cityControl = `${classes.control}  ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControl}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && (
          <p style={{ color: "red" }}>Please enter valid name</p>
        )}
      </div>
      <div className={streetControl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && (
          <p style={{ color: "red" }}>Please enter valid street</p>
        )}
      </div>
      <div className={phoneControl}>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" ref={phoneInputRef} />
        {!formInputsValidity.phone && (
          <p style={{ color: "red" }}>Please enter valid number</p>
        )}
      </div>
      <div className={cityControl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && (
          <p style={{ color: "red" }}>Please enter valid city</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
