// import React, { useState } from 'react';
// // import { Switch } from 'antd';
// import { changeToggleState } from '../../redux/transactions/transactionsSlice.js';
// import { useDispatch } from 'react-redux';
// import { LabelToggle, SpanToggle, ToggleSwitch } from './Toggle.styled.js';
// import {
//   StyledDisabled,
//   StyledExpenseActive,
//   StyledIncomeActive,
// } from 'components/TransactionsModal/TransactionsModal.styled.js';

// const Toggle = () => {
//   const [isDisabled, setIsDisabled] = useState(true);
//   const dispatch = useDispatch();

//   const onChange = checked => {
//     setIsDisabled(!isDisabled);
//     dispatch(changeToggleState(checked));
//   };

//   return (
//     <>
//       {isDisabled ? (
//         <StyledDisabled>Income</StyledDisabled>
//       ) : (
//         <StyledIncomeActive>Income</StyledIncomeActive>
//       )}

//       <LabelToggle>
//         <ToggleSwitch
//           defaultChecked
//           type="checkbox"
//           onChange={onChange}
//           name="type"
//         />
//         <SpanToggle />
//       </LabelToggle>
//       {isDisabled ? (
//         <StyledExpenseActive>Expense</StyledExpenseActive>
//       ) : (
//         <StyledDisabled>Expense</StyledDisabled>
//       )}
//     </>
//   );
// };

// export default Toggle;
