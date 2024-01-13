import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialMedia from "./../SocialMedia/SocialMedia";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    role: "client",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const [signing, setSigning] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setSigning(true);

    const { password, confirmPassword, role } = formData;
    if (password !== confirmPassword) {
      // Display error message in Snackbar
      setSnackbarMessage("Passwords do not match");
      setSnackbarOpen(true);

      setSigning(false);
      return;
    }

    // Log form data before sending the request
    console.log("Form Data:", formData);

    const requestBody = {
      email: formData.email,
      password: formData.password,
      is_client: role === "client",
      is_freelancer: role === "freelancer",
    };

    // Log the JSON body
    console.log("Request JSON Body:", JSON.stringify(requestBody));

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/send_otp/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        // Pass the email as a parameter when navigating to the OTP verification page
        navigate("/otp", { state: { email: formData.email } });
      } else {
        console.error("Error sending OTP:", response.statusText);
        // Log the response for further inspection
        console.log(await response.json());
      }
    } catch (error) {
      console.error("Error sending OTP:", error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup} className="mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Sign up</h2>

        <div className="max-w-sm mx-auto">
          {/* Email Input */}
          <div className="flex flex-col mb-1">
            <label className="text-sm font-bold text-gray-600 mb-1">
              Email Address
            </label>
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

          {/* Password Input */}
          <div className="flex flex-col mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
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
                className="border rounded-md bg-white px-3 py-2 "
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col mb-1">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="current-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
          </div>

          {/* Reg Type */}
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Select your role
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="client">Client</option>
            <option value="freelancer" disabled>
              Freelancer
            </option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
        >
          {signing ? "Signing Up..." : "Sign Up"}
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

export default Signup;
