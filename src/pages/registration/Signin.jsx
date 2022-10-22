import React from 'react'
import "./signin.scss"
import PropTypes from 'prop-types'

const Signin = props => {
  return (
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
						<button className='ghost' name='signin'>Sign up</button>
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