import { useState } from "react";
import Button from "../components/UI/Button";
import Input from "../components/UI/Input";

export default function SignIn() {
  const [focus, setFocus] = useState(false);
  const onFocus = () => {
    setFocus((prev) => !prev);
  };
  const onBlur = () => {
    setFocus((prev) => !prev);
  };
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const reg = "/S+@S+.S+/".test(FormData.email);

    // if (!reg)
    //   setIsValid((prev) => {
    //     return { ...prev, email: false };
    //   });
    if (formData.password.length < 7)
      return setIsValid((prev) => {
        return { ...prev, password: false };
      });

    console.log(formData);
  };
  return (
    <main className="mx-auto max-w-[350px] pt-3">
      <article className="bg-white mt-10 border-1 border border-gray-s ">
        <h1 className="py-8 text-center text-4xl font-semibold font-ob">
          Instagram
        </h1>
        <form onSubmit={handleSubmit} className="px-10 flex flex-col">
          <Input
            placeholder="email"
            value={formData.email}
            handleInput={handleInput}
            type="email"
          />
          <Input
            className="my-2"
            placeholder="password"
            value={formData.password}
            handleInput={handleInput}
            type="password"
          />
          <Button title="Log in" />
          <a href="#" className="text-xs text-gray-500 text-center py-5">
            Forgot password?
          </a>
        </form>
      </article>

      <section className="bg-white flex justify-center border border-gray-s py-4 mt-2">
        <h4>Don't have an account? </h4>
        <a href="#" className="text-blue-600 font-semibold ml-1">
          Sign up
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
