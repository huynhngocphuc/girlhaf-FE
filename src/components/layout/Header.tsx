import { Link, NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        GirlHaf
      </Link>
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  )
}
