import styled from 'styled-components';
import BgModalTransaction from '../../img/Bg-trans-modal-desc.webp';

export const StyledTransactionsModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: var(--modal-backdrop);
  backdrop-filter: blur(3.5px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: start;
  }
`;

export const StyledModalTransaction = styled.div`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px var(--modal-shadow);
  backdrop-filter: blur(50px);
  background: var(--modal-background);
  background-image: url('${BgModalTransaction}');
  background-size: 130% 130%;
  background-position: center;
  width: 540px;
  /* max-height: 589px; */
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 320px) and (max-width: 767px) {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  h2 {
    color: var(--white);
    text-align: center;
    font-family: 'Poppins Regular';
    font-size: 30px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  button {
    border: none;
    cursor: pointer;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    min-height: 95vh;

    h2 {
      font-size: 24px;
    }
  }
`;
export const StyledModalToggle = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  p {
    font-family: 'Poppins SemiBold';
    font-size: 16px;
    font-weight: 600;
  }
`;
export const StyledIncomeActive = styled.p`
  color: var(--income-color);
`;
export const StyledExpenseActive = styled.p`
  color: var(--expenses-color);
`;
export const StyledDisabled = styled.p`
  color: var(--text-forms);
`;
export const StyledModalCloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  outline: transparent;
  color: var(--white);
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;
export const StyledModalBody = styled.form`
  gap: 40px;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const StyledTransactionModalSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  @media (min-width: 320px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const StyledTransactionAmount = styled.input`
  /* -webkit-appearance: none; */
  /* -moz-appearance: textfield; */
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

export const StyledTransactionComment = styled.textarea`
  width: 394px;
  height: 35px;
  padding-left: 8px;
  background-color: transparent;
  font-family: 'Poppins Regular';
  font-size: 18px;
  border: none;
  color: var(--white);
  border-bottom: 1px solid var(--modal-input-underline);
  outline: transparent;
  resize: none;
  &::placeholder {
    margin-bottom: 8px;
    color: var(--text-forms);

    @media (min-width: 320px) and (max-width: 768px) {
      padding-left: 10px;
    }
  }
  &:hover {
    color: var(--white);
    border-bottom: 1px solid var(--text-forms);
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 280px;
  }
`;
export const StyledTransactionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddTransactionButton = styled.button`
  padding: 13px 10px;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: var(--modal-button-gradient);
  text-align: center;
  color: var(--modal-accent-white);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);
  font-family: 'Poppins Regular';
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(
      to right,
      #7000ff 0%,
      #9e40ba 31%,
      #ffc727 100%
    );
    display: block;
    transition: 1s;
    background-size: 200% auto;
    background-position: right center;
  }
`;
export const CancelTransactionButton = styled.button`
  padding: 13px 10px;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: var(--modal-accent-white);
  text-align: center;
  color: var(--text-button);
  box-shadow: 1px 9px 15px 0px var(--modal-button-shadow);
  font-family: 'Poppins Regular';
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
    background-image: linear-gradient(
      to right,
      #fff 0%,
      #623f8b 31%,
      #fff 100%
    );
    display: block;
    transition: 1s;
    background-size: 200% auto;
    background-position: right center;
  }
`;
