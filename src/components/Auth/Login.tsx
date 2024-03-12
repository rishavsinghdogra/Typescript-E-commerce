import useAuthUser from "../../hooks/useAuth.ts";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas";
import { apiLoginUser } from "../../services/Login.api";
import useMutate from "../../hooks/useMutation.ts";
import { AxiosError, AxiosResponse } from "axios";

const Login = () => {
  const { login } = useAuthUser();
  const navigate = useNavigate();

  const { values, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      password: "",
    },
    validationSchema: basicSchema,
  });

  const { mutate } = useMutate(apiLoginUser, {
    onSuccess: (response: AxiosResponse) => {
      login(response.data.token);
      navigate("/");
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const credentials = {
      username: values.name,
      password: values.password,
    };

    mutate(credentials);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-[#31B7C2] to-[#7BC393]">
      <form className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={values.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            id="password"
            className={`w-full px-4 py-2 rounded-md border ${
              errors.password ? "border-red-500" : "focus:border-blue-500"
            } focus:outline-none `}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
