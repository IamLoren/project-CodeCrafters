import React from 'react';
import {
  CurrencyTable,
  CurrencyTbody,
  CurrencyThead,
  GraphBox,
  HigherRate,
  LowerRate,
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

      <GraphBox>
        <LowerRate>27.55</LowerRate>
        <HigherRate>30.00</HigherRate>
      </GraphBox>
    </>
  );
};

export default Currency;
