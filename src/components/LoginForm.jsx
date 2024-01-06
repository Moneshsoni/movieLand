import React from 'react'

const LoginForm = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Form</title>
      <form action="your_backend_login_endpoint" method="POST">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required="" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required="" />
        <input type="submit" defaultValue="Login" />
      </form>
    </>
  )
}

export default LoginForm
