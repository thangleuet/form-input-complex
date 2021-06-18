import React, { useState, useEffect } from 'react'
const SimpleInput = (props) => {

  const [entername, setEntername] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterTouch, setEnterTouch] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  const enternameIsValid = entername.trim() !== '';
  const enterEmailIsValid = enterEmail.trim() !=='' && enterEmail.trim().includes('@')
  const nameInput = !enternameIsValid && enterTouch;
  const emailInput = !enterEmailIsValid && enterTouch;

  useEffect(() => {
    if (enternameIsValid && enterEmailIsValid) {
      setFormIsValid(true)
    }
    else {
      setFormIsValid(false)
    }
  }, [enternameIsValid , enterEmailIsValid])

  const nameInputChangeHandler = (event) => {
    setEntername(event.target.value)
  }
  const emailInputChangeHandler = (event) => {
    setEnterEmail(event.target.value)
  }
  const InputBlurHandler = (event) => {
    setEnterTouch(true)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnterTouch(true)
    if (!enternameIsValid) {

    }
    setEntername('');
    setEnterEmail('');
    setEnterTouch(false)
  }
  const nameInputClasses = nameInput ? 'form-control invalid' : 'form-control'
  const emailInputClasses = emailInput ? 'form-control invalid' : 'form-control'
  return (
    <form onSubmit={formSubmitHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={entername}
          onBlur={InputBlurHandler}
          onChange={nameInputChangeHandler} />
      </div>
      {nameInput && <p className="error-text">Name must not be empty !</p>}

      <div className={emailInputClasses}>
        <label htmlFor='email' >Your Email</label>
        <input
          type='email'
          id='email'
          value={enterEmail}
          onBlur = {InputBlurHandler}
          onChange = {emailInputChangeHandler} />
      </div>
      {emailInput && <p className="error-text"> must not be empty !</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
