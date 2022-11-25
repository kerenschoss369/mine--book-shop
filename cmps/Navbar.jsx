const { NavLink } = ReactRouterDOM

export function Navbar() {
  return (
    <header className="main-header flex align-center space-between">
      <h1 className="logo">Keren's Books</h1>
      <ul className="main-nav flex">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/book">All Books</NavLink></li>
          <li><NavLink exact to="/about">About Us</NavLink></li>
      </ul>
    </header>
  );
}
