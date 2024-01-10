import styled from 'styled-components';

export const TransactionsModalWindow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const ModalWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  background: rgba(255, 255, 255, 0.1);
  width: 540px;
  max-height: 589px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  h2 {
    color: #fbfbfb;
    text-align: center;
    /* font-family: Poppins; */
    font-size: 30px;
    font-weight: 400;
  }
  button {
    float: right;
    padding: 6px 10px;
    background-color: #ccc;
    border: none;
    cursor: pointer;
  }
  /* &:hover {
    background-color: #999;
  } */
`;
export const ModalBody = styled.div`
  padding: 20px;
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const TransactionType = styled.select`
//   width: 100%;
//   margin-bottom: 10px;
// `;
export const TransactionModalSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;
export const TransactionAmount = styled.input`
  width: 181px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  /* font-family: Poppins; */
  font-size: 18px;
  font-weight: 700;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const TransactionDate = styled.input`
  width: 181px;
  color: #fbfbfb;
  /* font-family: Poppins; */
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`;

export const TransactionComment = styled.textarea`
  width: 394px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  /* resize: vertical; */
`;
export const TransactionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const AddTransactionButton = styled.button`
  padding: 13px 10px;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  text-align: center;
  color: #fff;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  /* font-family: Poppins; */
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
`;
export const CancelTransactionButton = styled.button`
  padding: 13px 10px;
  width: 300px;
  height: 50px;
  border-radius: 20px;
  background: #fff;
  text-align: center;
  color: #623f8b;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  /* font-family: Poppins; */
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #0069d9;
  }
`;
