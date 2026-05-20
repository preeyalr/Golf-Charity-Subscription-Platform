import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthCard from "../../components/auth/AuthCard";
import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

import { registerUser } from "../../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await registerUser(formData);

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
          Create Account
        </h1>

        <form onSubmit={handleSubmit}>

          <AuthInput
            type="text"
            placeholder="Full Name"
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
          />

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

          <AuthButton text="Create Account" />

        </form>

      </AuthCard>

    </AuthLayout>
  );
};

export default Register;