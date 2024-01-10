import React from 'react';
import {
  CurrencyTable,
  CurrencyTbody,
  CurrencyThead,
  // CurrencyWrapper,
} from './CurrencyStyled';

const Currency = () => {
  return (
    <>
      <CurrencyTable>
        <CurrencyThead>
          <tr>
            <th>Currency</th>
            <th>Purchase</th>
            <th>Sale</th>
          </tr>
        </CurrencyThead>
        <CurrencyTbody>
          <tr>
            <td>USD</td>
            <td>27.55</td>
            <td>27.65</td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>30.00</td>
            <td>30.10</td>
          </tr>
        </CurrencyTbody>
      </CurrencyTable>

      {/* <CurrencyWrapper>
        <ul>
          <li>Currency</li>
          <li>Purchase</li>
          <li>Sale</li>
        </ul>

        <ul>
          <li>USD</li>
          <li>27.55</li>
          <li>27.65</li>
        </ul>

        <ul>
          <li>EUR</li>
          <li>30.00</li>
          <li>30.10</li>
        </ul>
      </CurrencyWrapper> */}
    </>
  );
};

export default Currency;
