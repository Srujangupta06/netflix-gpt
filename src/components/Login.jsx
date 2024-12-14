import { useState } from "react";
import Header from "../components/Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = (event) => {
    event.preventDefault();
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <main
        style={{
          backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg')`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black w-full h-full opacity-60 relative"></div>
        <form className="bg-black bg-opacity-75 rounded-md  w-10/12 md:w-6/12 lg:w-3/12 absolute top-[40%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-4">
          <h1 className="text-white text-2xl font-semibold mb-4 font-roboto">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div className="mb-3">
              <input
                type="text"
                placeholder="User Name"
                className="bg-transparent border border-gray-400 px-2 py-2 w-full rounded-sm text-gray-300 font-roboto text-[16px] outline-none "
              />
            </div>
          )}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email or phone number"
              className="bg-transparent border border-gray-400 px-2 py-2 w-full rounded-sm text-gray-300 font-roboto text-[16px] outline-none "
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent border border-gray-400 px-2 py-2 w-full rounded-sm text-gray-300 font-roboto text-[16px] outline-none "
            />
          </div>
          <button
            className="hover:bg-red-700 transition-all duration-300 hover:text-gray-300 bg-red-600 px-4 py-2 text-[16px] text-white w-full rounded-sm font-semibold font-roboto mb-2"
            type="submit"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-[16px] text-gray-300 font-roboto">
            {isSignInForm ? "New to Netflix? " : "Already have account? "}
            <span className="text-white font-semibold">
              <button className="hover:underline" onClick={toggleSignInForm}>
                {isSignInForm ? "Sign Up" : "Sign In"}
              </button>
            </span>
          </p>
        </form>
      </main>
    </div>
  );
};
export default Login;
