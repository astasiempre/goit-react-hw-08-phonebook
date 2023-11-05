import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logOutThunk } from 'redux/authReducer';
import { selectAuthIsAuthenticated } from 'redux/authSelectors';

const Navigation = () => {
 
const authenticated = useSelector(selectAuthIsAuthenticated);
const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  }
  return (
    <header>
      <nav>
        {authenticated ? (
          <>
            <NavLink className="header-link" to="/contacts">
              Contacts
            </NavLink>
            {/* <button onClick={onLogOut}>Logout</button> */}
            {/* <UserMenu onLogOut={onLogOut} /> */}
            <UserMenu onLogOut={onLogOut} />
          </>
        ) : (
          <>
            <NavLink className="header-link" to="/register">
              Register
            </NavLink>
            <NavLink className="header-link" to="/login">
              Login
            </NavLink>
          </>
        )}
      </nav>

      {/* <UserMenu /> */}
    </header>
  );
}

export default Navigation