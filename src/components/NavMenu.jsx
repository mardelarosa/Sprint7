import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.fonsPagina};
  color: ${({ theme }) => theme.colors.textButton};
  border-radius: 5px;
`;

const NavMenu = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <Link to="/">Benvinguda</Link>
        </NavItem>
        <NavItem>
          <Link to="/calculator">Calculadora</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavMenu;
