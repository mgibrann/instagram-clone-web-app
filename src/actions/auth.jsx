import { authActions } from "../store/auth";
import * as API from "../api";

export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await API.signin(formData);
    dispatch(authActions.signin({ profile: data?.result, token: data?.token }));
    dispatch(authActions.error(null));
    navigate("/", { replace: true });
  } catch (error) {
    const errMessage =
      error?.response?.data?.message || "invalid email or password!";
    dispatch(authActions.error(errMessage));
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await API.signup(formData);
    dispatch(authActions.signin({ profile: data?.result, token: data?.token }));
    dispatch(authActions.error(null));
    navigate("/", { replace: true });
  } catch (error) {
    const errMessage =
      error?.response?.data?.message || "invalid email or password!";
    dispatch(authActions.error(errMessage));
  }
};
