import { useRef, useState } from "react";
import classes from "./checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const hasFiveChar = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFOrmInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = nameInputRef.current.value;
    const enteredPostal = nameInputRef.current.value;
    const enteredCity = nameInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreedIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = hasFiveChar(enteredPostal);

    setFOrmInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreedIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreedIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid;
  };

  const nameControl = `${classes.control}  ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControl = `${classes.control}  ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalControl = `${classes.control}  ${
    formInputsValidity.postal ? "" : classes.invalid
  }`;
  const cityControl = `${classes.control}  ${
    formInputsValidity.postal ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControl}>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter valid name</p>}
      </div>
      <div className={streetControl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter valid street</p>}
      </div>
      <div className={postalControl}>
        <label htmlFor="postal">Postal code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Please enter valid postal</p>}
      </div>
      <div className={cityControl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter valid city</p>}
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
