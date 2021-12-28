import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const reducer = (state, action) => {
  if (action.type === "CHANGE") {
    return { value: action.value, isTouched: state.isTouched };
  } else if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  } else if (action.type === "RESET") {
    return initialState;
  }
  return initialState;
};

const useInput = (validateInput) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const valueIsValid = validateInput(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: state.value,
    isValid: valueIsValid,
    isTouched: state.isTouched,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
