import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
  color: #fbfbfb;
  text-align: center;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  weight: 280px;
  height: 900px;
`;
export const StatisticsWrap = styled.div`
  display: flex;
  gap: 32px;
  width: 395px;
  height: 50px;
  margin-bottom: 20px;
`;
export const StatisticsInfoWrap = styled.div`
  display: flex;
  direction: column;
`;
export const DropsWrap = styled.div`
display; flex;
gap: 32px;
width: 395px;
height: 50px;
`;
export const Dropdown = styled.select`
  width: 182px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--white-60, rgba(255, 255, 255, 0.6));
  background: rgba(74, 86, 226, 0.1);
  cursor: pointer;
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
`;

export const DropdownContent = styled.option`
  display: flex;
  /* position: absolute; */
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
  /* flex-shrink: 0;
  z-index: 1; */
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  padding: 4px auto 4px auto 20px
  &:hover: {
    color: #ff868d;
  }
`;

export const Wrap = styled.div`
  display: flex;
  width: 395px;
  height: 607px;
`;
