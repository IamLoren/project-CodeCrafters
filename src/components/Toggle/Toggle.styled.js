import styled from 'styled-components';

export const LabelToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;
export const ToggleSwitch = styled.input`
  display: none;
  &:checked + ::before {
    transform: translateX(40px);
    background-color: var(--expenses-color);
    content: '-';
  }
`;

export const SpanToggle = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: var(--modal-accent-white);
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--modal-accent-white);
    font-size: 40px;
    position: absolute;
    content: '+';
    left: -2px;
    top: -2px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    background: var( --income-color);
    box-shadow: 0px 6px 15px 0px var(--modal-toggle-shadow);
    transition: transform 0.3s ease;
  }
`;
