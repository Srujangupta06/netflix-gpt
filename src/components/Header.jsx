import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <header className="px-4 md:px-20 py-4 absolute z-10 w-full flex items-center justify-between">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        width={"180px"}
        height={"60px"}
      />
      {user && <div className="flex items-center gap-6">
        <img
          src={
            user.photoURL
              ? user.photoURL
              : "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          }
          alt="profile"
          width={50}
          height={50}
          className="rounded-sm"
        />
        <button
          onClick={handleSignOut}
          className="hover:bg-red-700 transition-all duration-300 hover:text-gray-300 bg-red-600 px-4 py-2 my-4 text-[16px] text-white w-[100px] h-[40px] rounded-sm font-semibold font-roboto mb-4"
        >
          Sign out
        </button>
      </div>}
    </header>
  );
};

export default Header;
