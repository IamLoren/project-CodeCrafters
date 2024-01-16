import styled from 'styled-components';

export const StyledSection = styled.section`
  padding: 40px 0;
  margin: 0 auto;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1279px) {
    padding: 20px 0;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    padding: 10px 0;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 20px;
    @media (min-width: 768px) and (max-width: 1279px) {
      gap: 15px;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      gap: 10px;
    }
  }

  h1 {
    font-size: 55px;
    font-family: 'Poppins Regular';
    font-weight: 400;
    text-transform: uppercase;
    color: var(--disabled-toggle);
    text-align: center;
    @media (min-width: 768px) and (max-width: 1279px) {
      font-size: 50px;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 30px;
      text-align: center;
      width: 280px;
    }
  }
  p {
    font-size: 25x;
    font-family: 'Poppins Regular';
    font-weight: 400;
    text-transform: uppercase;
    color: var(--disabled-toggle);
    @media (min-width: 768px) and (max-width: 1279px) {
      font-size: 20px;
      text-align: center;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 15px;
      text-align: center;
      width: 280px;
    }
  }
  a {
    font-size: 25px;
    font-family: 'Poppins Regular';
    font-weight: 400;
    text-transform: uppercase;
    color: var(--expenses-color);
    &:hover {
      color: var(--income-color);
    }
    @media (min-width: 768px) and (max-width: 1279px) {
      font-size: 20px;
    }

    @media (min-width: 320px) and (max-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const StyledImageNoFound = styled.img`
  width: 600px;
  height: 400px;
  object-fit: contain;

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 550px;
    height: 350px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: 300px;
    height: 200px;
  }
`;
