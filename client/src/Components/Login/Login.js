import React, { useContext, useState } from 'react'
import '../Login/login.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { adminLogin } from '../ApiServices';



const Login = () => {
 
  const [formData,setFormData] = useState({email:'', password:''});
  const navigate = useNavigate();

  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminLogin(formData);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      }
    } catch (error) {
      alert('Invalid Email or password');
      console.error('Login failed:', error);
    }
  };

  return (
    <>
        <div className='login'>
         <div className='loginBox'>
          <h3>Admin Login</h3>
          <div id='recaptcha-container'></div>
          <div className='loginInput'>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='text' name='email' value={formData.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
            
            <Button type='submit' className='loginBtn'> Login</Button>
          </form>
          </div>
         
         </div>
        </div>
    </>
  )
}

export default Login

// import React, { useContext, useState } from 'react'
// import '../Login/login.css'
// import { Button } from 'react-bootstrap'
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { adminLogin } from '../ApiServices';



// const Login = () => {
 
//   const [formData,setFormData] = useState({email:'', password:''});
//   const navigate = useNavigate();

//   const handleChange = (e) =>{
//     setFormData({...formData, [e.target.name]:e.target.value});
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await adminLogin(formData);
//       if (response.status === 200) {
//         localStorage.setItem('token', response.data.token);
//         navigate('/home');
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <>
//         <div className='login'>
//          <div className='loginBox'>
//           <h3>Admin Login</h3>
//           <div id='recaptcha-container'></div>
//           <div className='loginInput'>
//           <form onSubmit={handleSubmit}>
//             <label>Email</label>
//             <input type='text' name='email' value={formData.email} onChange={handleChange}></input>
//             <label>Password</label>
//             <input type='password' name='password' value={formData.password} onChange={handleChange}></input>
            
//             <Button type='submit' className='loginBtn'> Login</Button>
//           </form>
//           </div>
         
//          </div>
//         </div>
//     </>
//   )
// }

// export default Login