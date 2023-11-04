import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react'
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
// import { selectAuthIsAuthenticated } from 'redux/authSelectors';

const Navigation = () => {
// const authenticated = useSelector(selectAuthIsAuthenticated);

  return (
    <header>
      <nav>
        {/* <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/movies">
          Movies
        </NavLink> */}
        <NavLink className="header-link" to="/register">
          Register
        </NavLink>
        <NavLink className="header-link" to="/login">
          Login
        </NavLink>
        <NavLink className="header-link" to="/contacts">
          Contacts
        </NavLink>
        
          </nav>
          {/* {authenticated && <UserMenu />} */}
          <UserMenu />
    </header>
  );
}

export default Navigation