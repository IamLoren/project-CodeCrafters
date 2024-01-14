// import styled from 'styled-components';

export const selectStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: 'transparent',
    marginBottom: '-2px',
    marginTop: '40px',
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    outline: 'none',
    borderRadius: '0',
    boxShadow: 'none',
    '&:hover': {
      border: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
    },
  }),
  singleValue: styles => ({
    ...styles,
    color: '#FBFBFB',
    fontSize: '18px',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '18px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '8px',
    backgroundColor: 'transparent',
    boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(50px)',
    overflow: 'hidden',
    color: '#FBFBFB',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '400',

    '&::before': {
      background:
        'linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%)',
      content: '""',
      filter: 'blur(50px)',
      position: 'absolute',
      inset: '0%',
      zIndex: '-1',
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    if (isFocused) {
      return {
        ...styles,
        background: '#FFFFFF1A',
        color: '#FF868D',
      };
    } else if (isSelected) {
      return {
        ...styles,
        background: 'transparent',
      };
    } else {
      return {
        ...styles,
      };
    }
  },
};
