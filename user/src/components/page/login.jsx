import React, { useState, useEffect } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [login, setLogin] = useState([]);
  const [admin, setAdmin] = useState([]);

  const logindata = async () => {
    try {
      const res = await axios.get("http://localhost:5000/userinfo");
      setLogin(res.data || []);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    }
  };

  const adminData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/admin");
      setAdmin(res.data || []);
    } catch (err) {
      console.error("Failed to fetch admins:", err);
    }
  };

  useEffect(() => {
    logindata();
    adminData();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const v = (val) => (val ? val.trim() : "");

    const input = v(formData.emailOrPhone);
    // If input contains '@', treat it as an email and require @gmail.com
    if (!input) {
      newErrors.emailOrPhone = "Email or phone number is required";
    } else if (input.includes("@")) {
      if (!input.endsWith("@gmail.com")) {
        newErrors.emailOrPhone = "Email must be a valid @gmail.com address";
      }
    } 

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { emailOrPhone, password } = formData;
    const input = emailOrPhone.trim();

    if (input === "Admin@gmail.com" && password === "Admin@123") {
      window.location.href = "/admin";
      return;
    }

    const userExists = login.find(
      (user) => (user.emailOrPhone || "").toString() === input
    );
    const sellerExists = admin.find(
      (a) => (a.emailOrPhone || "").toString() === input
    );

    if (!userExists && !sellerExists) {
      alert("User not exists with this email or phone");
      return;
    }

    if (userExists) {
      if (userExists.password !== password) {
        alert("Wrong password");
        return;
      }
      setIsSubmitting(true);
      localStorage.setItem("user", JSON.stringify(userExists));
      window.location.href = "/";
      return;
    }

    if (sellerExists) {
      if (sellerExists.password !== password) {
        alert("Wrong seller  password");
        return;
      }
      setIsSubmitting(true);
      localStorage.setItem("admin", JSON.stringify(sellerExists));
      window.location.href = "/sellers";
      return;
    }
  };

  const handleForgotPassword = () => {
    alert("Forgot password functionality would be implemented here");
  };

  return (
    <div className="body">
      <br />
      <div className="login-container">
        <div className="login-right">
          <div className="login-form-container">
            <header className="login-header">
              <h1>Log in </h1>
              <p>Enter your details below</p>
            </header>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="emailOrPhone"
                  placeholder="Email or Phone Number"
                  value={formData.emailOrPhone}
                  onChange={handleInputChange}
                  className={errors.emailOrPhone ? "error" : ""}
                />
                {errors.emailOrPhone && (
                  <span className="error-message">{errors.emailOrPhone}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={errors.password ? "error" : ""}
                />
                {errors.password && (
                  <span className="error-message">{errors.password}</span>
                )}
              </div>

              <div className="form-actions">
                <button type="submit" className="login-btn">
                  {isSubmitting ? "Logging in..." : "Log In"}
                </button>
              </div>

              <div className="new-user">
                <p>
                  <span>
                    <Link className="span" to="/signup">
                      {" "}
                      Create new Account
                    </Link>
                  </span>
                </p>
                <div className="forgot-password-link">
                  <p>
                    <span onClick={handleForgotPassword}>Forgot Password?</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
