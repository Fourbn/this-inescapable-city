import React from "react";

const CommentModal = () => {
  return (
    <div>
      <button type="button">+</button>
      <h2>Comment Prompt Question</h2>
      <form action="#" method="POST">
        <label htmlFor="name">
          <p>Your Name</p>
          <input id="name" name="name" type="text" />
        </label>
        <label htmlFor="comment">
          <p>Your Responses</p>
          <textarea name="comment" id="comment"></textarea>
        </label>
        <button type="submit">Submit Response</button>
      </form>
    </div>
  );
};
