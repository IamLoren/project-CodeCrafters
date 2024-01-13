import styled from "styled-components";

export const DoughnutContainerStyled = styled.div`
width: 288px;
height: 288px;
position: relative;
@media (max-width: 1279px) {
  width: 336px;
  height: 336px;
  }
  @media (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
`
export const BalanceStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
span{
  font-family: "Poppins SemiBold";
  font-size: 18px;
  font-style: normal;
  line-height: normal;
  color: var(--white);
}
`
export const NotifStyled = styled.div`
    display: flex;
    border-radius: 8px;
    background: rgba(82, 59, 126, 0.6);
    font-family: 'Poppins Regular';
    line-height: normal;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    color: white;
    margin-top: 14px;
`
