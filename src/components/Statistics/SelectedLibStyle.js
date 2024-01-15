export const libStyles = {
  control: (provided, state) => ({
    ...provided,
    fontSize: '16px',
    // fontFamily: 'Poppins-Regular',
    borderRadius: '8px',
    border: `1px solid (--white-60, rgba(255, 255, 255, 0.60))`,
    background: 'rgba(74, 86, 226, 0.10)',

    width: '182px',
    height: '50px',
    paddingLeft: '12px',
    // marginBottom: '20px',
    '@media (min-width: 768px) and (max-width: 1279px)': {
      width: '160px',
    },
    '@media (min-width: 320px) and (max-width: 767px)': {
      width: '280px',
    },
  }),

  singleValue: (provided, state) => ({
    ...provided,
    color: 'var(--white)',
    fontSize: '18px',
  }),

  menu: (provided, state) => ({
    ...provided,
    color: 'var(--white)',
    borderRadius: '8px',
    background:
      'var(--Small-Form-color, linear-gradient(0deg, rgba(83, 61, 186, 0.70) 0%, rgba(80, 48, 154, 0.70) 43.14%, rgba(106, 70, 165, 0.52) 73.27%, rgba(133, 93, 175, 0.13) 120.03%))',
    boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.25)',
    backdropFilter: 'blur(50px)',
  }),

  option: (provided, { isSelected }) => ({
    ...provided,
    borderRadius: '8px',
    background: isSelected ? 'var(--modal-background)' : 'transparent',
    color: isSelected ? 'var(--white)' : provided.color,
    ':hover': {
      background: 'var(--modal-background)',
      color: 'var(--expenses-color)',
    },
  }),
};
