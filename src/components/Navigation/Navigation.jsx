import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutThunk } from 'redux/authReducer';
import { selectAuthIsAuthenticated } from 'redux/authSelectors';
import { ContainerContactsUser, NavContainer, RegLogContainer } from './Navigation.styled';

const Navigation = () => {
  const authenticated = useSelector(selectAuthIsAuthenticated);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <header>
      <NavContainer>
        <div>
          <NavLink className="header-link" to="/">
            Home
          </NavLink>
        </div>
        <div>
          {authenticated ? (
            <ContainerContactsUser>
              <NavLink
                className="header-link header-link-contacts"
                to="/contacts"
              >
                Contacts
              </NavLink>
              <UserMenu onLogOut={onLogOut} />
            </ContainerContactsUser>
          ) : (
            <RegLogContainer>
              <NavLink className="header-link" to="/register">
                Register
              </NavLink>
              <NavLink className="header-link" to="/login">
                Login
              </NavLink>
            </RegLogContainer>
          )}
        </div>
      </NavContainer>
    </header>
  );
};

export default Navigation;
