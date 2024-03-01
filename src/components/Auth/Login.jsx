import { useState } from "react";
import useAuthUser from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const URL = "https://fakestoreapi.com/auth/login";

  const { login } = useAuthUser();
  const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = {
      username: name,
      password: password,
    };

    try {
      const response = await axios.post(URL, credentials);
      if (response.status === 200) {
        const token = response.data.token;
        login(token);
        navigate("/");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      throw error;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-[#31B7C2] to-[#7BC393]">
      <form className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
