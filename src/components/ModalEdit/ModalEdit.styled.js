import styled from 'styled-components';

export const StyledDisabledSelect = styled.span`
  width: 394px;
  color: var(--white);
  border-bottom: 1px solid var(--modal-input-underline);
  padding-bottom: 8px;
  padding-left: 8px;
  font-size: 18px;
  font-family: 'Poppins Regular';

  @media (min-width: 320px) and (max-width: 768px) {
    width: 280px;
    padding-left: 20px;
  }
`;

export const StyledAmount = styled.input`
  width: 181px;
  text-align: center;
  background-color: transparent;
  color: var(--white);
  font-family: 'Poppins SemiBold';
  outline: transparent;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid var(--modal-input-underline);
  padding-bottom: 8px;
  &::placeholder {
    color: var(--text-forms);
    font-family: 'Poppins Bold';
    font-size: 18px;
    color: var(--white);
  }
  &:hover {
    color: var(--white);
    font-family: 'Poppins SemiBold';
    border-bottom: 1px solid var(--text-forms);
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 280px;
    padding-left: 20px;
    text-align: start;
  }
`;
export const StyledComment = styled.textarea`
  width: 394px;
  padding-left: 8px;
  height: 35px;
  background-color: transparent;
  font-family: 'Poppins Regular';
  font-size: 18px;
  border: none;
  color: var(--white);
  border-bottom: 1px solid var(--modal-input-underline);
  outline: transparent;
  resize: none;
  &:hover {
    border-bottom: 1px solid var(--text-forms);
  }
  &::placeholder {
    margin-bottom: 8px;
    color: var(--white);
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 280px;
    padding-left: 20px;
  }
`;

export const StyledEditDatePickerWrapper = styled.div`
  position: relative;
  width: 181px;
  text-align: center;
  font-family: 'Poppins Regular';
  border-bottom: 1px solid var(--modal-input-underline);

  &:hover {
    border-color: var(--text-forms);
  }
  input {
    color: var(--white);
    font-size: 18px;
    font-weight: 400;

    padding-left: 20px;
    background: none;
    background-color: transparent;
    border: none;
    outline: transparent;
    padding-bottom: 8px;
    &:hover {
      color: var(--white);
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
