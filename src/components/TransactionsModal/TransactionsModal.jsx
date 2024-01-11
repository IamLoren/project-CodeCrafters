// import React, { useEffect, useMemo } from 'react';
// import { createPortal } from 'react-dom';
// import {
//   TransactionsModalWindow,
//   ModalWrapper,
//   ModalBody,
//   TransactionType,
//   TransactionAmount,
//   TransactionDate,
//   TransactionComment,
//   AddTransactionButton,
//   CancelTransactionButton,
//   TransactionModalSelect,
//   TransactionButtonsWrapper,
// } from './TransactionsModalStyled.jsx';
// import Toggle from 'components/Toggle/Toggle';
// import { Select } from 'antd';
// import Button from '../Button/Button.jsx';
// import AccentButton from 'components/AccentButton/AccentButton.jsx';
// import { DatePicker, Space } from 'antd';
// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };

// const modalRootElement = document.getElementById('modal'); //portal modal
// // console.log(modalRootElement);
// const TransactionsModal = () => {
//   const element = useMemo(() => document.createElement('div'), []); //portal modal
//   useEffect(() => {
//     modalRootElement.appendChild(element);

//     return () => {
//       modalRootElement.removeChild(element);
//     };
//   }); //portal modal

//   return createPortal(
//     <TransactionsModalWindow>
//       <ModalWrapper>
//         <h2>Add Transaction</h2>
//         <Toggle />
//         <button
//           onClick={() => {
//             document.querySelector('TransactionsModal').style.display = 'none';
//           }}
//         >
//           Close
//         </button>

//         <ModalBody>
//           {/* <TransactionType>
//         <option disabled>Select a category</option>
//           <option value="income">Income</option>
//           <option value="expense">Expense</option>
//         </TransactionType> */}
//           <Select
//             showSearch
//             style={{ width: 394 }}
//             placeholder="Select a category"
//             optionFilterProp="children"
//             filterOption={(input, option) =>
//               (option?.label ?? '').includes(input)
//             }
//             filterSort={(optionA, optionB) =>
//               (optionA?.label ?? '')
//                 .toLowerCase()
//                 .localeCompare((optionB?.label ?? '').toLowerCase())
//             }
//             options={[
//               {
//                 value: '1',
//                 label: 'Main expenses',
//               },
//               {
//                 value: '2',
//                 label: 'Products',
//               },
//               {
//                 value: '3',
//                 label: 'Car',
//               },
//               {
//                 value: '4',
//                 label: 'Self care',
//               },
//               {
//                 value: '5',
//                 label: 'Child care',
//               },
//               {
//                 value: '6',
//                 label: 'Household products',
//               },
//             ]}
//           />
//           <TransactionModalSelect>
//             <TransactionAmount type="number" placeholder="0.00" required />

//             {/* <TransactionDate type="date" required /> */}
//             <Space direction="vertical" placeholder="Select date">
//               <DatePicker onChange={onChange} />
//             </Space>
//           </TransactionModalSelect>

//           <br />
//           <TransactionComment placeholder="Comment"></TransactionComment>
//           <br />
//           <TransactionButtonsWrapper>
//             {/* <AddTransactionButton
//           onClick={() => {
//           }}
//         >
//           Add
//         </AddTransactionButton> */}
//             <Button title="Add" />
//             {/* <CancelTransactionButton
//           onClick={() => {
//           }}
//         >
//           Cancel
//         </CancelTransactionButton> */}
//             <AccentButton title="Cancel" />
//           </TransactionButtonsWrapper>
//         </ModalBody>
//       </ModalWrapper>
//     </TransactionsModalWindow>,
//     element
//   );
// };

// export default TransactionsModal;
