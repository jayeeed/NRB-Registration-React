import { useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [loging, setLoging] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoging(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/get_auth_token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      const token = data.token;
      localStorage.setItem("token", token);

      // Log the token to the console
      console.log("Token:", token);

      // Check if registration is completed
      const responseStatus = await fetch(`${apiUrl}/registration/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!responseStatus.ok) {
        throw new Error("Failed to check registration status");
      }

      const registrationData = await responseStatus.json();

      if (registrationData.exists) {
        // If registration is complete, navigate to the profile page
        navigate("/profile");
      } else {
        // If registration is not complete, navigate to the info page
        navigate("/registration");
      }
    } catch (error) {
      console.error("Login failed:", error.message);

      // Display error message in Snackbar
      setSnackbarMessage("Login failed: Invalid credentials");
      setSnackbarOpen(true);
    } finally {
      setLoging(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className="mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Log in</h2>

        {/* Email Input */}
        <div className="flex flex-col mb-2">
          <label className="text-sm font-bold text-gray-600">
            Email Address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="Enter your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="flex flex-col mb-2">
          <label className="text-sm font-bold text-gray-600">Password</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
        >
          {loging ? "Loging in..." : "Login"}
        </button>

        {/* Social Media Links */}
        <SocialMedia value={"Login"} />
      </form>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        className="top-0 right-0"
      >
        <MuiAlert
          elevation={7}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="error"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Login;
