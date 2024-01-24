import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;

    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    // actions afer clicking on Login button...
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden bg-bgPurple m-auto pb-[100px]">
      <img src="/pet-care-logo-blue.png" className="w-80 h-80" />
      <div
        className="flex flex-col items-center bg-white w-[330px] py-5 rounded-lg"
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
        }}
      >
        <h2 className="text-lg font-poppins font-semibold ">Log In Form</h2>
        <div className="mb-2 mt-3.5 w-[300px]">
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4 w-[300px]">
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
            placeholder="Enter your password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <button
          className="w-[300px] bg-bgGreen text-white py-2 rounded focus:outline-none"
          onClick={handleLogin}
        >
          Log in
        </button>
        <div className="flex items-center justify-between w-[354px] px-7">
          <p className="mt-4 text-sm text-blue-500">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>
          <p className="mt-4 text-sm text-gray-600 flex flex-col items-center">
            Don't have an account? <br />
            <span className="text-blue-500">
              <Link to="/registration"> Create new account </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
