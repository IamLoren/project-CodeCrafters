import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideLeft = styled.div`
  border-right: 1px solid var(--text-forms);
  filter: drop-shadow(1px 4px 1px var(--modal-shadow));
  padding-top: 40px;
  height: calc(100vh - 50px);

  nav {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
    margin-left: 20px;
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
  }

  div svg {
    fill: var(--icon-color-link);
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
