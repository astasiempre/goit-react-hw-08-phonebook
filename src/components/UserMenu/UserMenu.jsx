import React from 'react'
import { StyledUserMenuContainer } from './UserMenu.styled';

const UserMenu = () => {
  return (
    <StyledUserMenuContainer>
      <p className='userEmail'>mango@mail.com</p>
      <button>Logout</button>
    </StyledUserMenuContainer>
  );
}

export default UserMenu