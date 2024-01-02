import React, { useState } from 'react';

const styles = {
  content: {
    padding: 10,
  },
};

function Counter(props) {
  const [count, setCount] = useState(1);

  return (
    <div style={styles.content}>
      <p>{count}번 클릭</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default Counter;
