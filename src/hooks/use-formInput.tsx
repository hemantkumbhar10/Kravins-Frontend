import { useState } from "react"



const useFormInput = (validate:any,value:string)=>{

    const [inputValue, setInputValue] = useState(value);
    const [isTouched, setIsTouched] = useState(false); //if the input box is touched by cursor then set enteredNameTouched to true


    const valueIsValid = validate(inputValue);
    const hasError = !valueIsValid && isTouched;
  

    const valueChangeHandler = (event:React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputValue(event.currentTarget.value);
    }

    const inputBlurHandler = (event:React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setIsTouched(true);
      };

      const reset = () =>{
        setIsTouched(false);
      }

    return{
        value:inputValue,
        hasError:hasError,
        isValid:valueIsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export {useFormInput};