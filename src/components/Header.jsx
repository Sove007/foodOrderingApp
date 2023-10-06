import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";
import { SlBasket } from "react-icons/sl";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      src="https://i.pinimg.com/564x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg"
      alt="logo"
    />
  </a>
);

const Header = () => {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const [isSignIn, setSignIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-White shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10 flex-wrap space-x-8">
          <Link to="/">
            <li className="px-2 font-medium  hover:text-orange-300">Home</li>
          </Link>

          <Link to="/About">
            <li className="px-2 font-medium  hover:text-orange-300">About</li>
          </Link>

          <Link to="./Contact">
            <li className="px-2 font-medium   hover:text-orange-300">
              contact
            </li>
          </Link>

          <Link to="/Instamart">
            <li className="px-2 font-medium hover:text-orange-300">
              Instamart
            </li>
          </Link>

          <Link to="/cart">
            <li className="px-2 flex font-medium  hover:text-orange-300">
              <span className=" bg-orange-50  px-4 m-1 border border-gray-200 rounded-xl  ">
                {cartItems.length}
              </span>
              <SlBasket />
            </li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>

      <div className="flex justify-center items-center mr-4">
        {isSignIn ? (
          <button
            className="  text-black hover:text-orange-300 mr-7   font-medium"
            onClick={() => setSignIn(false)}
          >
            Sign in
          </button>
        ) : (
          <button
            className=" text-black hover:text-orange-300 mr-7  font-medium"
            onClick={() => setSignIn(true)}
          >
            Sign up
          </button>
        )}
        {isLogedIn ? (
          <button
            className=" bg-black text-white hover:text-orange-300 py-2 px-5  font-medium"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className=" bg-black text-white hover:text-orange-300 py-2 px-5  font-medium"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
