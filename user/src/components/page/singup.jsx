import React, { useState, useEffect } from 'react';
import './signup.css'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

 const SignupPage = () => {

  const navigate = useNavigate(); //this is use to navigate page 
  
  const [formData, setFormData] = useState({
    name:'',
    emailOrPhone: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

    // get data from user database
  const [signup,setsignUp] = useState([]);
  const [admin,setadmin] = useState([]);
  const sigupdata = async () => {
    const res = await axios.get('http://localhost:5000/userinfo');
      setsignUp(res.data);
  };
  //admin data
  const adminData = async () => {
    const res = await axios.get('http://localhost:5000/admin');
      setadmin(res.data);
  };
    useEffect(()=>{
      sigupdata()
      adminData()
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

    const userExists = signup.find(
    (user) => user.emailOrPhone === formData.emailOrPhone
    );
    const adminExists = admin.find(
    (admin) => admin.emailOrPhone === formData.emailOrPhone
    );

    //check user exist or not
    if(userExists || adminExists ) {
    alert("email is already exists ");
    navigate('/login');
    return;
  }else{
    setIsSubmitting(true)
    if(e.target.className=="signup-btn"){
      await axios.post('http://localhost:5000/userinfo', formData); 
      alert("Signup  successful");
      navigate('/login')
      setFormData({
        name: '',
        emailOrPhone: '',
        password: ''
      });
    }
    else if(e.target.className=="signup-btn2"){
      await axios.post('http://localhost:5000/admin', formData); 
      alert("Signup as a Seller successful");
      navigate('/login')
      setFormData({
        name: '',
        emailOrPhone: '',
        password: ''
      });
    }
  }
}
  return (
  <div className='body'> 
    <br></br>
    <div className="signup-container">
      <div className="signup-right">
        <div className="signup-form-container">
          <header className="signup-header">
            <h1>Sign up  </h1>
            <p>Enter your details below</p>
          </header>
          
          <form className="signup-form" >
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
                  onClick={handleSubmit}
                  >
                Create Account As a User
                </button>
            </div>
            <div className="form-actions">
                <button 
                  type="submit" 
                  className="signup-btn2"
                  onClick={handleSubmit}
                  >
                Create Account As a Seller
                </button>
            </div>
            <div className="login-redirect">
              <p><Link to="/login">Already have an account?</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  </div> 
  )
  
}
export default SignupPage
