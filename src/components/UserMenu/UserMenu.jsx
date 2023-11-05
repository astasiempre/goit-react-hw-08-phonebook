import React from 'react'
import { StyledUserMenuContainer } from './UserMenu.styled';

const UserMenu = ({ onLogOut }) => {
  return (
    <StyledUserMenuContainer>
      <p className="userEmail">mango@mail.com</p>
      {/* <button onClick={onLogOut}>Logout</button> */}
      <button onClick={onLogOut}>Logout</button>
    </StyledUserMenuContainer>
  );
};

export default UserMenu