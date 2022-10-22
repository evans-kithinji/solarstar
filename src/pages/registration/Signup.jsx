import React from 'react'
import "./signup.scss"
import { Link} from 'react-router-dom'

export const Signup = () => {
  return (
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
  )
}
export default Signup
