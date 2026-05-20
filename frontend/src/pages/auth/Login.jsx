import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { loginUser } from "../../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      console.log(data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>

      <AuthCard>

        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit}>

          <AuthInput
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
          />

          <AuthInput
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({
                ...formData,
                password: e.target.value,
              })
            }
          />

          <AuthButton text="Login" />

        </form>

      </AuthCard>

    </AuthLayout>
  );
};

export default Login;