import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  padding: 1px;
`;
export const StyledInnerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 1279px) {
    padding: 16px 2px;
  }
  @media (max-width: 767px) {
    padding: 12px 1px;
  }
  div {
    display: flex;
    align-items: center;
  }
  span,
  svg {
    color: var(--text-forms);
    text-align: right;
    font-family: 'Poppins Regular';
    font-size: 16px;
    line-height: normal;
  }
`;

export const StyledExitButton = styled.div`
  display: flex;
  border-left: 1px solid var(--text-forms);
  padding-left: 12px;
  margin-left: 12px;
  cursor: pointer;
  svg {
    &:hover {
      color: white;
    }
  }
  @media (max-width: 767px) {
    border: none;
    margin-left: 8px;
    padding: 0;
  }
  button {
    color: var(--text-forms);
    font-family: 'Poppins Regular';
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    background: transparent;
    border: none;
    @media (max-width: 1279px) {
      margin-left: 8px;
      padding: 0;
    }
    @media (max-width: 767px) {
      display: none;
    }
    &:hover {
      color: white;
    }
  }
`;
