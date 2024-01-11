import styled from 'styled-components';
import { Select } from 'antd';
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
  min-height: 589px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

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
`;
export const StyledModalToggle = styled.div`
  display: flex;
  gap: 20px;

  margin-bottom: 40px;
  p {
    color: var(--text-forms);
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-weight: 600;
  }
  /* p.active{
    color:#FF868D;
  } */
`;
export const StyledModalCloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  outline: transparent;
  color: var(--white);
`;
export const StyledModalBody = styled.div`
  /* gap: 40px; */
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
  margin-bottom: 40px;
`;
export const StyledSelect = styled(Select)`
  color: var(--text-forms);
  margin-bottom: 40px;
  font-family: 'Poppins Regular';
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--modal-input-underline);
  //
`;
export const StyledTransactionAmount = styled.input`
  /* -webkit-appearance: none; */
  /* -moz-appearance: textfield; */
  width: 181px;
  color: var(--text-forms);
  text-align: center;
  font-family: 'Poppins Regular';
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--modal-input-underline);
`;

export const StyledTransactionComment = styled.textarea`
  width: 394px;
  height: 35px;
  margin-bottom: 40px;
  color: var(--text-forms);
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--modal-input-underline);
  /* resize: vertical; */
  &::placeholder {
    margin-bottom: 8px;
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
  //test hover. will change
  &:hover {
    background-color: #0069d9;
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
  //test hover. will change
  &:hover {
    background-color: #0069d9;
  }
`;
