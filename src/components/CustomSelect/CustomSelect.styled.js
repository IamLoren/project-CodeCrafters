export const selectStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: 'transparent',
    width: '394px',
    border: 'none',
    borderBottom: '1px solid var(--modal-input-underline)',
    outline: 'none',
    borderRadius: '0',
    boxShadow: 'none',

    '@media (min-width: 320px) and (max-width: 768px)': {
      width: '280px',
      paddingLeft: '8px',
    },
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--white)',
    fontSize: '18px',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'var(--text-forms)',
    fontSize: '18px',
  }),
  menu: styles => ({
    ...styles,
    borderRadius: '8px',
    backgroundColor: 'transparent',
    boxShadow: '0px 4px 60px 0px var(--modal-shadow)',
    backdropFilter: 'blur(50px)',
    overflow: 'hidden',
    color: 'var(--white)',
    fontFamily: 'Poppins Regular',
    fontSize: '16px',

    '&::before': {
      background: 'var(--modal-dropdown-gradient)',
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
        background: 'var(--modal-dropdown-activebg)',
        color: 'var( --expenses-color)',
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
