import React from 'react'
import "./signin.scss"
import "./navbar.css";
import { Link} from 'react-router-dom'
// import PropTypes from 'prop-types'
// props

const Signin = () => {
  return (
   <div>
         <div className="top">
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
                <div className='header'>Sign In</div>
                <div className='button-input-group'>
               
                <div className='group input-group'>
                    <input type="email" placeholder='email' />
                    
                </div>
                <div className='group input-group'>
                    <input type="password" placeholder='password' />

                </div>
                <div className='group input-group'>
                    <button className='signin-btn'>sign in</button>

                </div>
                </div>


            </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-right'>
						<h1>Hello !</h1>
						<p>Please sign up here</p>
						
					<div className='group button-group'>
           
						<button className='ghost' name='signin'>  <Link to='/signup'>Sign up </Link></button>
					</div>
					</div>
                   
            </div>
        </div>
    </div>
    </div>
    </div> 
  )
}

Signin.propTypes = {}

export default Signin