import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FacebookIcon from "@mui/icons-material/Facebook";

import { signIn, signUp } from "../actions/auth";
import useInput from "../hooks/useInput";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

export default function SignIn() {
  const [isSignIn, setIsnSignIn] = useState(true);

  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNotEmpty = (value) => value.trim().length > 0;
  const isLengthEight = (value) => value.trim().length > 7;

  const validateEmail = (value) =>
    value.includes("@") &&
    value.includes(".") &&
    value.length > 2 &&
    value.split("").indexOf("@") > 0;

  const {
    value: enteredUsername,
    hasError: usernameHasError,
    isValid: usernameValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: usernameReset,
  } = useInput(isNotEmpty);
  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(validateEmail);
  const {
    value: enteredPassword,
    hasError: passwordHasError,
    isValid: passwordValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passswordBlurHandler,
    reset: passwordReset,
  } = useInput(isLengthEight);

  let formIsValid = false;
  if (passwordValid && emailValid) {
    formIsValid = true;
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const formData = {
      username: enteredUsername,
      email: enteredEmail,
      password: enteredPassword,
    };
    if (isSignIn) {
      dispatch(signIn(formData, navigate));
    } else {
      dispatch(signUp(formData, navigate));
    }
    // passwordReset();
    // emailReset();
  };

  const Divider = () => (
    <div className="py-4 flex justify-center items-center">
      <span className="bg-gray-200 h-[1px] w-full" />
      <h4 className="text-xs text-gray-500 px-4">OR</h4>
      <span className="bg-gray-200 h-[1px] w-full" />
    </div>
  );

  const LoginFacebook = () => (
    <a
      href="#"
      className={`flex text-sm justify-center gap-2 ${
        isSignIn ? "text-blue-800" : "text-white bg-blue-500 py-1 rounded"
      }`}
    >
      <FacebookIcon sx={{ fontSize: 18 }} />
      <h4>Log in with Facebook</h4>
    </a>
  );

  return (
    <main className="mx-auto max-w-[350px] pt-3">
      <article className="sm:bg-white mt-10 sm:border border-gray-s px-10">
        <h1 className="py-6 text-center text-4xl font-semibold">Instagram</h1>
        {!isSignIn && (
          <>
            <h2 className="text-base text-gray-400 font-semibold text-center pb-4">
              Sign up to see photos and videos from your friends.
            </h2>
            <LoginFacebook />
            <Divider />
          </>
        )}
        <form onSubmit={onSubmitHandler} className="flex flex-col">
          {!isSignIn && (
            <Input
              errorMessage={usernameHasError && "Username must not empty!"}
              placeholder="username"
              handleInput={usernameChangeHandler}
              type="text"
              onBlur={usernameBlurHandler}
              value={enteredUsername}
            />
          )}
          <Input
            errorMessage={emailHasError && "invalid format email!"}
            placeholder="email"
            handleInput={emailChangeHandler}
            type="email"
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          <Input
            errorMessage={passwordHasError && "password too short!"}
            placeholder="password"
            handleInput={passwordChangeHandler}
            type="password"
            onBlur={passswordBlurHandler}
            value={enteredPassword}
          />
          <Button
            title={isSignIn ? "Log in" : "Sign Up"}
            disable={!formIsValid}
          />
          {!isSignIn && (
            <a className="text-xs text-gray-400 text-center pt-4 pb-7 px-2">
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </a>
          )}
          {isSignIn && <Divider />}
          {isSignIn && <LoginFacebook />}
          {state.error && (
            <h5 className="text-red-600 text-xs pt-4 text-center">
              {state.error}
            </h5>
          )}
          {isSignIn && (
            <a href="#" className="text-xs text-blue-900 text-center py-5">
              Forgot password?
            </a>
          )}
        </form>
      </article>

      <section className="sm:bg-white flex justify-center sm:border border-gray-s py-4 mt-2">
        <h4>{isSignIn ? "Don't have an account?" : "Have an account?"} </h4>
        <a
          href="#"
          onClick={() => setIsnSignIn((prev) => !prev)}
          className="text-blue-600 font-semibold ml-1"
        >
          {isSignIn ? "Sign up" : "Log In"}
        </a>
      </section>

      <section>
        <h1 className="text-center my-5 text-sm">Get the app.</h1>
        <div className="flex justify-center gap-2">
          <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo">
            <img
              className="h-[40px]"
              alt="Available on the App Store"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7ED1DF97-A81D-4917-9DB1-5EC015DE79A6%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img
              className="h-[40px]"
              alt="Available on Google Play"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
