import React from 'react'

const Login = () => {
  return (
    <div className='sign-in-container'>
      <div className="sign-in">
        <h2>Sign In</h2>
        <form action="#">
          <label htmlFor="Email">Enter your Email :  </label>
          <br />
          <input type="email" name="Email" id="Email" 
          placeholder='Enter Email'
          />
          <br />
          <label htmlFor="password">Enter your Email :  </label>
          <br />
          <input type="password" name="password" id="password" 
          placeholder='Enter password'
          />
          <br />
          <div className="sign-in-button">
            <button>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
