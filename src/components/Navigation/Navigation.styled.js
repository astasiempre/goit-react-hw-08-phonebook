

import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; 
`;

export const ContainerContactsUser = styled.div`
  display: flex;
  align-items: center;

  .header-link-contacts {
  margin-right: auto 0;
  }
`;

export const RegLogContainer = styled.div`
  display: flex;
  `;

export const ButtonLogout = styled.button`
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;





