import React from 'react'
import { StyledUserMenuContainer } from './UserMenu.styled';
import { ButtonLogout } from 'components/Navigation/Navigation.styled';

const UserMenu = ({ onLogOut }) => {
  return (
    <StyledUserMenuContainer>
      <p className="userEmail">mango@mail.com</p>
      <ButtonLogout onClick={onLogOut}>Logout</ButtonLogout>
    </StyledUserMenuContainer>
  );
};

export default UserMenu