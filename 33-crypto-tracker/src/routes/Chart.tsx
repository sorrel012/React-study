import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from '../api';

function Chart() {
  const coinId = useOutletContext<string>();
  const { data, isLoading } = useQuery({
    queryKey: ['ohlcv', coinId],
    queryFn: () => fetchCoinHistory(coinId),
  });

  return <h1>Chart</h1>;
}

export default Chart;
