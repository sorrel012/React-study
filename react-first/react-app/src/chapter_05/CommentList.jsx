import React from 'react';
import Comment from './Comment';

const comments = [
  {
    name: 'Hana',
    comment: '나무의 하루',
  },
  {
    name: 'sorrel012',
    comment: '안녕하세요',
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentList;
