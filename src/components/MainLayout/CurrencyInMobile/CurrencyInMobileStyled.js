import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavMobile = styled.div`
  nav {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
    margin-bottom: 28px;
    margin-left: 20px;

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-top: 40px;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      flex-direction: row;
      justify-content: center;
      gap: 32px;
      margin: 12px 0;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--white);
  font-family: 'Poppins Regular';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    background-color: var(--modal-input-underline);
    border-radius: 2px;
    height: 18px;
    width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 320px) and (max-width: 768px) {
      height: 38px;
      width: 38px;
      border-radius: 5px;
    }
  }

  div svg {
    fill: var(--icon-color-link);
    @media (min-width: 320px) and (max-width: 768px) {
      height: 26px;
      width: 26px;
    }
  }

  &.active {
    font-weight: 700;
  }

  &.active div {
    background: var(--icon-violet);
  }

  &.active div svg {
    fill: var(--white);
  }
`;
