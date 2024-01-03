import { useEffect, useState } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log('=====================');
    console.log('useEffect() is called');
    console.log(`is Full: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16, textAlign: 'center' }}>
      <p>{`총 ${count}명 수용`}</p>

      <button
        onClick={increaseCount}
        disabled={isFull}
        style={{ marginRight: 5 }}
      >
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: 'red' }}>만원</p>}
    </div>
  );
}

export default Accommodate;
