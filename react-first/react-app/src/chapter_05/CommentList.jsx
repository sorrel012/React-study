import React from 'react';
import Comment from './Comment';

function CommentList(props) {
  return (
    <div>
      <Comment name={'Hana'} comment={'나무의 하루'} />
      <Comment name={'sorrel012'} comment={'안녕하세요~'} />
    </div>
  );
}

export default CommentList;
