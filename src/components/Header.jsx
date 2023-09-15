import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { useSelector } from "react-redux";

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
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-White shadow-lg">
      <Title />
      <div>
        <ul className="flex py-10">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>

          <Link to="/About">
            <li className="px-2">About</li>
          </Link>

          <Link to="./Contact">
            <li className="px-2">contact</li>
          </Link>

          <Link to="/Instamart">
            <li className="px-2">Instamart</li>
          </Link>

          <Link to="/cart">
            <li className="px-2">cart - {cartItems.length} items</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "🟢" : "🔴"}</h1>
      {isLogedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
