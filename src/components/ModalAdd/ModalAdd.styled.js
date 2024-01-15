import styled from 'styled-components';

export const DatePickerWrapper = styled.div`
  position: relative;
  width: 181px;
  text-align: center;
  font-family: 'Poppins Regular';
  align-items: center;
  border-bottom: 1px solid var(--modal-input-underline);
  &:hover {
    border-color: var(--text-forms);
  }
  input {
    color: var(--text-forms);
    font-size: 18px;
    font-weight: 400;
    background: none;
    background-color: transparent;
    border: none;
    outline: transparent;
    padding-bottom: 8px;
    padding-left: 20px;
    &:hover {
      color: var(--white);
      border-color: var(--text-forms);
    }
    @media (min-width: 320px) and (max-width: 768px) {
      text-align: start;
      padding-left: 1px;
    }
  }
  svg {
    position: absolute;
    right: 1px;
    bottom: 8px;
    color: var(--icon-violet);
    width: 24px;
    height: 24px;
    @media (min-width: 320px) and (max-width: 768px) {
      right: 17px;
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 280px;
    text-align: start;
    padding-left: 20px;
  }
`;
