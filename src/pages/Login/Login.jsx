import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // after login actions
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden bg-bgPurple m-auto pb-[100px]">
      <img src="/pet-care-logo-blue.png" className="w-80 h-80" />
      <div
        className="flex flex-col items-center bg-white w-[350] py-5 rounded-lg"
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
        }}
      >
        <h2 className="text-lg ">Log In Form</h2>
        <div className="mb-2 mt-3.5 w-[300px]">
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
            placeholder="Enter your email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4 w-[300px]">
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500 cursor-pointer"
            placeholder="Enter your password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="w-[300px] bg-bgGreen text-white py-2 rounded focus:outline-none"
          // onClick={handleLogin}
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

      {/* <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Title>Registration Form</Title>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            autoComplete="username"
            required
          />

          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <Label htmlFor="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <Button type="submit">Register</Button>
        </Form>
      </FormContainer> */}
    </div>
  );
};

export default Login;

// const Container = styled.div`
//   background-color: var(--purple);
//   width: 100vw;
//   height: 100vh;
//   overflow-x: hidden;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const FormContainer = styled.div`
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   /* display: none; */
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   margin-top: 10px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-top: 5px;
//   margin-bottom: 15px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   box-sizing: border-box;
// `;

// const Button = styled.button`
//   background-color: #4caf50;
//   color: #fff;
//   padding: 10px 15px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 16px;
// `;
