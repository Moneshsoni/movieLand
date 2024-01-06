import React from 'react'

const Admin = () => {
  return (
<>
  {/* Hello world */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Admin Panel</title>
  <header>
    <h1>Admin Panel</h1>
  </header>
  <nav>
    <ul>
      <li>
        <a href="#dashboard">Dashboard</a>
      </li>
      <li>
        <a href="#users">Users</a>
      </li>
      <li>
        <a href="#settings">Settings</a>
      </li>
    </ul>
  </nav>
  <section id="dashboard">
    <h2>Dashboard</h2>
    {/* Dashboard content goes here */}
  </section>
  <section id="users">
    <h2>Users</h2>
    {/* Users content goes here */}
  </section>
  <section id="settings">
    <h2>Settings</h2>
    {/* Settings content goes here */}
  </section>
  <footer>
    <p>© 2024 Admin Panel</p>
  </footer>
</>
  )
}

export default Admin
