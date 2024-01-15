import styled from 'styled-components';

export const StyledCurrencyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  max-width: 480px;
  margin-top: 32px;
  background-color: rgba(74, 86, 226, 0.1);

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-top: 0;
    width: 336px;
    display: flex;
    justify-content: flex-start;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 320px;
  }
`;

export const CurrencyTable = styled.div`
  max-height: 170px;
  width: 100%;
  @media (min-width: 768px) and (max-width: 1279px) {
  }

  @media (min-width: 320px) and (max-width: 767px) {
  }
`;

export const CurrencyThead = styled.div`
  background: rgba(255, 255, 255, 0.2);
  padding-left: 62px;
  margin-bottom: 24px;
  @media (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    padding-left: 20px;
    margin-bottom: 8px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 0;
  }
  div {
    display: flex;
    flex-direction: row;
    gap: 50px;
    padding: 16px 0px;
    @media (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      justify-content: space-around;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      gap: 33px;
      padding: 16px 10px;
    }
  }
  span {
    color: var(--white, #fbfbfb);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    font-family: 'Poppins Regular';

    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 0;
      padding-left: 0;
    }
  }
`;

export const CurrencyTbody = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 62px;
  gap: 24px;
  margin-bottom: 20px;
  @media (min-width: 768px) and (max-width: 1279px) {
    padding-left: 0;
    padding-left: 20px;
    gap: 20px;
    margin-bottom: 6px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
    text-align: start;
    gap: 60px;
    @media (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }

    @media (min-width: 320px) and (max-width: 767px) {
    }
  }
  span {
    color: var(--white);
    font-family: 'Poppins Regular';
    font-size: 16px;
    font-weight: 400;
    width: 65px;
  }
`;

export const StyledGraphBox = styled.div`
  position: relative;
  @media (min-width: 768px) and (max-width: 1279px) {
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    img {
      width: 280px;
    }
  }
`;

export const LowerRate = styled.p`
  position: absolute;
  top: 20px;
  left: 50px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-style: normal;
  font-family: 'Poppins Regular';

  @media (min-width: 320px) and (max-width: 1279px) {
    display: none;
  }
`;

export const HigherRate = styled.p`
  position: absolute;
  top: -14px;
  right: 97px;
  color: var(--dashboard-text, #ff868d);
  font-size: 12px;
  font-style: normal;
  font-family: 'Poppins Regular';

  @media (min-width: 320px) and (max-width: 1279px) {
    display: none;
  }
`;
