import axiosInstance from "./axiosClient";

const register = (username, email, password) => {
  return axiosInstance.post("/signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axiosInstance
    .post("/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axiosInstance.post("/signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
