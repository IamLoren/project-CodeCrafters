import styled from 'styled-components';
import BgModalTransaction from '../../img/Bg-trans-modal-desc.webp';

export const TransactionCardContainer = styled.li`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 4px 60px 0px var(--modal-shadow);
  backdrop-filter: blur(50px);
  background: var(--modal-background);
  background-image: url('${BgModalTransaction}');
  background-size: 130% 130%;
  margin-bottom: 20px;
  background-position: center;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 293px;
  padding-bottom: 40px;
  border-left: 5px solid
    ${props =>
      props.type === 'INCOME'
        ? 'var(--income-color)'
        : 'var(--expenses-color)'};

        &:hover {
          box-shadow: 0px 8px 40px 0px
            ${props =>
              props.type === 'INCOME'
                ? 'var(--income-color)'
                : 'var(--expenses-color)'};
          transform: scale(1.05);
          transition: border-left 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
`;

export const TransactionContent = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    margin: 0;
    height: 49px;
    border-bottom: 1px solid white;
    border-image-source: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.082) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );
    border-image-slice: 1;
    &:last-child {
      border-bottom: none;
    }

    span {
      font-family: 'Poppins SemiBold';
      font-weight: 600;
      font-style: normal;
      font-size: 16px;
      color: var(--white);
      margin: 15px 15px 0 15px;
    }

    .transaction-value {
      font-family: 'Poppins Regular';
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: right;
    }

    .transaction-sum {
      font-family: 'Poppins SemiBold';
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: right;
      color: ${props =>
        props.type === 'INCOME'
          ? 'var(--income-color)'
          : 'var(--expenses-color)'};
    }
  }
`;

export const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--text-forms);
  gap: 4px;
  margin-right: 15px;
  font-family: 'Poppins Regular';
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;

export const StyledDeleteButt = styled.button`
  position: static;
  width: 69px;
  height: 29px;
  font-family: 'Poppins Regular';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  right: 40px;
  bottom: 40px;
  margin-top: 10px;
  margin-left: 10px;
  color: var(--white);
  background: var(--modal-button-gradient);
  border-radius: 18px;
  border: none;
  outline: transparent;

  &:hover {
    background-color: #c82333;
  }
`;
