import React, { useEffect, useState } from 'react';
import {
  CurrencyTable,
  CurrencyTbody,
  CurrencyThead,
  HigherRate,
  LowerRate,
  StyledCurrencyWrapper,
  StyledGraphBox,
} from './CurrencyStyled';
import { useDispatch, useSelector } from 'react-redux';
import {
  currencySelector,
  // loadingCurrencySelector,
} from '../../../redux/selectors.js';
import { currencyThunk } from '../../../redux/currency/operations.js';
// import Loader from 'components/Loader/Loader';

const Currency = () => {
  const [currency, setCurrency] = useState([]);
  const dispatch = useDispatch();
  const todayCurrency = useSelector(currencySelector);
  // const loading = useSelector(loadingCurrencySelector);

  const lastUpdateTime = () => {
    const newTime = Date.now();
    localStorage.setItem('updateLastTime', newTime);
  };

  useEffect(() => {
    const updateLastTime = localStorage.getItem('updateLastTime');

    const timeHourPassed = () => {
      const HOUR_IN_MS = 60 * 60 * 1000; // 60 seconds * 60 minutes * 1000 milliseconds = 3,600,000 milliseconds
      return Date.now() - Number(updateLastTime) >= HOUR_IN_MS;
    };

    if (timeHourPassed() || !updateLastTime) {
      dispatch(currencyThunk());
      setCurrency(todayCurrency);
      lastUpdateTime();
    } else {
      setCurrency(todayCurrency);
    }
  }, [dispatch, todayCurrency]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <StyledCurrencyWrapper>
        <CurrencyTable>
          <CurrencyThead>
            <tr>
              <th>Currency</th>
              <th>Purchase</th>
              <th>Sale</th>
            </tr>
          </CurrencyThead>
          <CurrencyTbody>
            {currency.map(item => {
              return (
                <tr key={crypto.randomUUID()}>
                  <td>{item.currencyType}</td>
                  <td>{item.rateBuy}</td>
                  <td>{item.rateSell.toString().slice(0, -2)}</td>
                </tr>
              );
            })}
          </CurrencyTbody>
        </CurrencyTable>

        <StyledGraphBox>
          {currency?.map(item => {
            if (item.currencyCodeA === 840) {
              return (
                <LowerRate key={crypto.randomUUID()}>{item.rateBuy}</LowerRate>
              );
            }
            return [];
          })}

          {currency?.map(item => {
            if (item.currencyCodeA === 978) {
              return (
                <HigherRate key={crypto.randomUUID()}>
                  {item.rateBuy}
                </HigherRate>
              );
            }
            return [];
          })}
        </StyledGraphBox>
      </StyledCurrencyWrapper>
    </>
  );
};

export default Currency;
