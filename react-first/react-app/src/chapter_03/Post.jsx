import React from 'react';

function Post(props) {
  return (
    <div>
      <h1>{`안녕하세요? ${props.name}입니다.`}</h1>
      <h2>{`${props.category} 공부 중입니다.`}</h2>
    </div>
  );
}

export default Post;
