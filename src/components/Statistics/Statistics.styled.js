import styled from 'styled-components';
import statisticsBgMobRetina from '../../img/Mobile/statistics-bg-mob@retina.webp'

export const StatisticsTitle = styled.h3`
  color: var(--white);
  font-family: 'Poppins Regular';
  font-weight: 400;
  font-size: 30px;
`;
export const StatisticsChart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const StatisticsInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1279px) {
    width: 336px;
  }
  @media only screen and (max-width: 767px) {
    width: 280px;
  }
 
`;
export const DropsWrap = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 20px;
  @media only screen and (max-width: 1279px) {
    gap: 16px;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Dropdown = styled.select`
  width: 182px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));
  background: rgba(74, 86, 226, 0.1);
  cursor: pointer;
  padding-left: 20px;
  padding-right: 20px;
  color: var(--white, #fbfbfb);
  font-family: 'Poppins Regular';
  font-size: 16px;
  &::after{
    color:red;
  }
  @media only screen and (max-width: 1279px) {
    width: 160px;
  }
  @media only screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const DropdownContent = styled.option`
  display: flex;
  width: 182px;
  height: 157px;
  border-radius: 8px;
  background: var(
    --Small-Form-color,
    linear-gradient(
      0deg,
      rgba(83, 61, 186, 0.7) 0%,
      rgba(80, 48, 154, 0.7) 43.14%,
      rgba(106, 70, 165, 0.52) 73.27%,
      rgba(133, 93, 175, 0.13) 120.03%
    )
  );

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  color: var(--white, #fbfbfb);
  font-family: 'Poppins Regular';
  font-size: 16px;
  padding: 4px auto 4px 20px;
  &:hover {
    color: #ff868d;
  }
`;

export const Wrap = styled.div`
  /* width: 800px; */
    width:930px;
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 32px 16px 46px 46px;
  justify-content: space-between;
  @media (max-width: 1279px) {
    margin-top: 20px;
    padding:0;
    width: calc(100% - 40px);
  }
  @media only screen and (max-width: 767px){
    display: flex;
    flex-direction: column;
    background-image: url(${statisticsBgMobRetina});
    width:100% ;
    background: var(--modal-background);
		background-position: center;
  background-repeat: no-repeat;
	background-size: inherit;
  }
    @media only screen and (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${statisticsBgMobRetina});
  }
`;

export const WrapCategories = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 767px){
    width: 280px;
  }
`;

export const StatisticHead = styled.div`
  display: flex;
  width: 395px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  font-family: 'Poppins SemiBold';
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  /* backdrop-filter: blur(50px); */
  @media only screen and (max-width: 1279px){
    width: 336px;
  }
  @media only screen and (max-width: 767px){
    width: 280px;
  }
`;
export const Text = styled.p`
  color: var(--white);
  display: block;
`;
export const Info = styled.p`
  display: block;
`;
export const CategoriesList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
`;
export const CategoriesItem = styled.li`
  max-width: 395px;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  span {
    color: var(--expenses-color);
    font-size: 14px;
  }
  @media only screen and (max-width: 767px){
    padding: 0 15px;
  }
`;
export const SpanIncome = styled.span`
  color: var(--income-color);
  font-size: 14px;
`;
export const CategoryName = styled.p`
  display: block;
  font-size: 14px;
  color: var(--white);
  display: block;
`;
export const NameColor = styled.div`
  display: flex;
  justify-content: start;
`;
export const IndicateColor = styled.p`
  width: 20px;
  height: 20px;
  border: 1px;
  margin-right: 16px;
  background-color: ${props => props.color};
`;
