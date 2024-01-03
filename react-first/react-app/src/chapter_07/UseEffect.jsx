import React, { useEffect, useState } from 'react';

const styles = {
  content: {
    padding: 10,
  },
};

function UseEffect(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  });

  return (
    <div style={styles.content}>
      <p>{count}번 클릭</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default UseEffect;
