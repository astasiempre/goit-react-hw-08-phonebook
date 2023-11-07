
import styled from 'styled-components';


export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
  
    `;

export const ContainerContactsUser = styled.div`
    display: flex;
    margin: auto 0;
    align-items: center;
      justify-content: space-between;
   
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