import API from "../utils/api";

export const registerUser = async (formData) => {
  const response = await API.post(
    "/auth/register",
    formData
  );

  return response.data;
};

export const loginUser = async (formData) => {
  const response = await API.post(
    "/auth/login",
    formData
  );

  return response.data;
};