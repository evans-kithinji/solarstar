import React from 'react'
import "./signup.scss"
import "./navbar.css";
import { Link} from 'react-router-dom'

export const Signup = () => {
  return (
    <div>   <div className="top">
    <div className="topLeft">
      <i className="topIcon fab fa-facebook-square"></i>
      <i className="topIcon fab fa-instagram-square"></i>
      <i className="topIcon fab fa-pinterest-square"></i>
      <i className="topIcon fab fa-twitter-square"></i>
    </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="topListItem">
          <Link className="link" to="/">
            Solarstar
          </Link>
        </li>

         {/* <li className="topListItem">LOGOUT</li> */}
      </ul>
    </div>
    <div className="topRight">
      
        <Link className="link" to="/settings">
        
        </Link>
      
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/signin">
              Sign In
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      
      <i className="topSearchIcon fas fa-search"></i>
    </div>
  </div>
    <div className='body'>
    <div className='container con'>
        <div className='form-container sign-p-container'>
            <form action="#">
                <div className='header'>Signup</div>
                <div className='button-input-group'>
                <div className='group input-group'>
                    <input type="text" placeholder='Name' />
                    
                </div>
                <div className='group input-group'>
                    <input type="email" placeholder='email' />
                    
                </div>
                <div className='group input-group'>
                    <input type="password" placeholder='password' />

                </div>
                <div className='group input-group'>
                    <button className='signup-btn' > Sign up </button>

                </div>
                </div>


            </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-right'>
						<h1>Welcome Back!</h1>
						<p>Please login your personal info</p>
						
					<div className='group button-group'>
						<button className='ghost' name='signin'><Link to="/signin">sign in</Link></button>
					</div>
					</div>
                   
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
export default Signup
