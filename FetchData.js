import axios from 'axios';

export const getData = async () => {
  try {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h',
    );
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
