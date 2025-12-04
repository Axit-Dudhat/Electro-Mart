import React, { useState, useEffect } from 'react';
import './signup.css'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

 const Forgotpassword = () => {
  const navigate = useNavigate(); //this is use to navigate page 
  
  const [formData, setFormData] = useState({
    name:'',
    emailOrPhone: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

    // get data from database
  const [signup,setsignUp] = useState([]);
  const sigupdata = async () => {
    const res = await axios.get('http://localhost:5000/signup');
      setsignUp(res.data);
  };
    useEffect(()=>{
      sigupdata()
    },[]);

  const validateForm = () => {
    const newErrors = {};
    //name validatoin
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    //email validation
    if (!formData.emailOrPhone.trim()) {
    newErrors.emailOrPhone = 'Email or phone number is required';
  } else if (!formData.emailOrPhone.includes('@gmail.com')){
      newErrors.emailOrPhone = 'Email must be a valid @gmail.com address';
  } 
  //password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if(!validateForm()) {
      return
    }

    const userExists = signup.some(
    (user) => user.emailOrPhone === formData.emailOrPhone
    );

    //check user exist or not
   if(userExists) {
    alert("User already exists with this email");
    navigate('/login');
    return;
  }

    setIsSubmitting(true)
    try {
      await axios.post('http://localhost:5000/signup/signups', formData); 
      alert("Signup successful");
      navigate('/login')
      setFormData({
        name: '',
        emailOrPhone: '',
        password: ''
      });
    } catch (err) {
      console.error('Signup failed:', err);
    }
}


  return (
  <div className='body'> 
    <br></br>
    <div className="signup-container">
      <div className="signup-right">
        <div className="signup-form-container">
          <header className="signup-header">
            <h1>Forgot password</h1>
            <p>Enter your details below</p>
          </header>
          
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                />{errors.emailOrPhone && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

             
                <div className="form-group">
              <input
                type="text"
                name="emailOrPhone"
                placeholder="Email or Phone Number"
                value= { formData.emailOrPhone}
                onChange={handleInputChange}
                className={errors.emailOrPhone ? 'error' : ''}
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
                className={errors.password ? 'error' : ''}
              />
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            
            <div className="form-actions">
              
                <button 
                  type="submit" 
                  className="signup-btn"
                  >
                Create Account
                </button>
            </div>
            <div className="login-redirect">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            <div className="forgot-password-link">
              <p>
                <span onClick={navigate('/forgotpassword')}>Forgot Password?</span>
              </p>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div> 
  )
  
}
export default Forgotpassword
