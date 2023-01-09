import React, { useState } from "react";

// interface inputhook{
//     enteredValue:Function
// }


const useInput = (validateValue:any) => {
  const [enteredValue, setEnteredValue] = useState(""); //fetches the value submitted by form here
  const [isTouched, setIsTouched] = useState(false); //if the input box is touched by cursor then set enteredNameTouched to true


  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnteredValue(event.currentTarget.value);
  };

  const inputBlurHandler = (event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsTouched(true);
  };


  const reset = () =>{
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    hasError: hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
