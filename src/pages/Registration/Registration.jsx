import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import loginSchema from "../../loginSchema";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-x-hidden bg-bgPurple m-auto py-[100px]">
      <div
        className="flex flex-col items-center bg-white w-[330px] py-5 px-4 rounded-lg"
        style={{
          boxShadow:
            "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
        }}
      >
        <h2 className="text-2xl mb-4 font-poppins font-semibold	">
          Registration
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              {...register("username")}
              className="w-[300px] font-poppins font-light text-textGray border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <br />
            {errors.username ? (
              <p
                className="text-sm text-red-700 mt-2"
                style={{ maxWidth: "300px" }}
              >
                {errors.username.message}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              className="w-[300px] font-poppins font-light text-textGray border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <br />
            {errors.email ? (
              <p
                className="text-sm text-red-700 mt-2"
                style={{ maxWidth: "300px" }}
              >
                {errors.email.message}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              className="w-[300px] font-poppins font-light text-textGray border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <br />
            {errors.password ? (
              <p
                className="text-sm text-red-700 mt-2"
                style={{ maxWidth: "300px" }}
              >
                {errors.password.message}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword")}
              className="w-[300px] font-poppins font-light text-textGray border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <br />
            {errors.confirmPassword ? (
              <p
                className="text-sm text-red-700 mt-2"
                style={{ maxWidth: "300px" }}
              >
                {errors.confirmPassword.message}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              {...register("phoneNumber")}
              className="w-[300px] font-poppins font-light text-textGray border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-blue-500"
            />
            <br />
            {errors.phoneNumber ? (
              <p
                className="text-sm text-red-700 mt-2"
                style={{ maxWidth: "300px" }}
              >
                {errors.phoneNumber.message}
              </p>
            ) : null}
          </div>
          <button
            className="w-[300px] bg-bgGreen text-white py-2 rounded focus:outline-none"
            type="submit"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-gray-600 mx-10">
            Already have an account?
            <span className="text-blue-500">
              <Link to="/"> Log in </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
