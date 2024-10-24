import React from 'react'

const SignUp = () => {
  return (
    <div className='sign-in-container'>
    <div className="sign-in">
      <h2>Sign Up</h2>
      <form action="#">
      <label htmlFor="name">Enter your name :  </label>
      <input type="text" name="name" id="name" 
      placeholder='Enter name'
      />

        <label htmlFor="Email">Enter your Email :  </label>
        <input type="email" name="Email" id="Email" 
        placeholder='Enter Email'
        />

        <label htmlFor="password">Enter your password :  </label>
        <input type="password" name="password" id="password" 
        placeholder='Enter Password'
        />
        <div className="sign-up-button">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUp;

