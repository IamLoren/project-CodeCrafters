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
import ImgCurrencyDiagram from '../../../img/currency-diagr.svg';
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
            <div>
              <span>Currency</span>
              <span>Purchase</span>
              <span>Sale</span>
            </div>
          </CurrencyThead>
          <CurrencyTbody>
            {currency.map(item => {
              return (
                <div key={crypto.randomUUID()}>
                  <span>{item.currencyType}</span>
                  <span>{item.rateBuy}</span>
                  <span>{item.rateSell.toString().slice(0, -2)}</span>
                </div>
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
          <img src={ImgCurrencyDiagram} alt="graphic" />
        </StyledGraphBox>
      </StyledCurrencyWrapper>
    </>
  );
};

export default Currency;
