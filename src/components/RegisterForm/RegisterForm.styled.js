import styled from 'styled-components';
import registerbg from '../../img/Register-bg-desc@retina.webp';
import formBg from '../../img/RegisterForm-bg@retina.webp';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${registerbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 533px;
  min-height: 624px;
  padding: 40px 62px;

  border-radius: 8px;
  background: var(--modal-background);
  background-image: url(${formBg});
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 4px 60px 0px var(--modal-shadow);
  /* backdrop-filter: blur(50px); */
`;

export const InputBox = styled.div`
  position: relative;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  .icon {
    fill: var(--modal-input-underline);
    font-size: 24px;

    position: absolute;
    transform: translateY(70%);
    margin-left: 10px;
  }
`;
