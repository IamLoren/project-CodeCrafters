import axios from 'axios';

const variables = axios.create({
  baseURL: `https://api.monobank.ua`,
});

export const getCurrencyBank = async () => {
  const { data } = await variables.get('/bank/currency');
  return data;
};
