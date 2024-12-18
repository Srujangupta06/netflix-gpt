import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { checkVaildDataSignIn, checkVaildDataSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMsg, setErrMsg] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSignInForm = (event) => {
    setIsSignInForm(!isSignInForm);
  };
  const onHandleBtnClick = (event) => {
    // Validate the Sign In form
    if (isSignInForm) {
      // Login User
      if (errMsg) {
        const msg = checkVaildDataSignIn(
          email.current.value,
          password.current.value
        );
        setErrMsg(msg);
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            navigate("/browse");
            console.log("User", user);
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrMsg(errorMessage);
          });
      }
    } else {
      // Create a User
      if (errMsg) {
        const msg = checkVaildDataSignUp(
          name.current.value,
          email.current.value,
          password.current.value
        );
        setErrMsg(msg);
      } else {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name.current.value,
              photoURL: "https://avatars.githubusercontent.com/u/120577073?v=4",
            })
              .then(() => {
                // Profile updated!
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL,
                  })
                );
                navigate("/browse");
              })
              .catch((error) => {
                // An error occurred
                setErrMsg(error.message);
              });
          })
          .catch((error) => {
            const errorMessage = error.message;
            setErrMsg(errorMessage);
          });
      }
    }
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
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-black w-full h-full opacity-60 relative"></div>
        <form
          className="bg-black bg-opacity-60 rounded-md w-10/12 md:w-6/12 lg:w-3/12 absolute top-[40%] left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] px-6 py-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-white text-2xl font-semibold mb-4 font-roboto">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="User Name"
                ref={name}
                className="bg-transparent border border-gray-400 px-2 py-2 w-full rounded-sm text-gray-300 font-roboto text-[16px]"
              />
            </div>
          )}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email or phone number"
              ref={email}
              className="bg-transparent border border-gray-400 px-2 py-2 w-full rounded-sm text-gray-300 font-roboto text-[16px]"
            />
            {/* <p className="text-[16px] text-red-600 font-semibold mt-2">{errMsg}</p> */}
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              ref={password}
              className="bg-transparent border border-gray-400 px-2 py-2 w-full rounded-sm text-gray-300 font-roboto text-[16px] "
            />
            <p className="text-[16px] text-red-600 font-semibold mt-2">
              {errMsg}
            </p>
          </div>
          <button
            className="hover:bg-red-700 transition-all duration-300 hover:text-gray-300 bg-red-600 px-4 py-2 text-[16px] text-white w-full rounded-sm font-semibold font-roboto mb-4"
            type="submit"
            onClick={onHandleBtnClick}
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
