import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideLeft = styled.div`
  border-right: 1px solid rgba(255, 255, 255, 0.6);
  filter: drop-shadow(1px 4px 1px rgba(0, 0, 0, 0.25));
  padding-top: 40px;
  height: calc(100vh - 80px);

  nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
    margin-left: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: #fbfbfb;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  display: flex;
  align-items: center;
  gap: 20px;

  div {
    background-color: #734aef;
    border-radius: 2px;
    height: 18px;
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.active {
    font-weight: 700;
  }
`;
