import React from 'react';

const CommentBox = ({ commenterName, comment }) => {
  return (
    <div>
      <h2>{commenterName}</h2>
      <p>{comment}</p>
    </div>
  )
}

export default CommentBox;
