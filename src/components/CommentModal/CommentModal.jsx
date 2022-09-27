import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import fbApp from "../../firebase-config";

import {
  modal,
  exitButton,
  prompt,
  instructions,
  form,
  submitButton,
} from "./CommentModal.module.scss";

const CommentModal = ({ setFade, fadeProps }) => {
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [userComment, setUserComment] = useState("");

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const database = getDatabase(fbApp);
    const dbRef = ref(database);

    const newComment = {
      name: userName,
      comment: userComment,
      likes: 0,
      displayOnSite: false,
    };

    push(dbRef, newComment);
    setCommentSubmitted(true);
    setUserComment("");
    setUserName("");
  };

  return (
    <div
      className={`${modal} ${fadeProps.className}`}
      onAnimationEnd={fadeProps.onAnimationEnd}
    >
      <button
        type="button"
        className={exitButton}
        onClick={() => setFade(false)}
      >
        +
      </button>
      <h2 className={prompt}>
        {commentSubmitted
          ? "Thank you for submitting your comment!"
          : "The water remembers..."}
      </h2>
      {commentSubmitted ? (
        <p className={instructions}>
          We are looking forward to seeing what you have submitted. We'll need a
          bit of time to approve your comment before we post it. Please check
          back tomorrow!
        </p>
      ) : (
        <p className={instructions}>
          You can contribute to the installation by filling out a response to
          the prompt "The water remembers..." below.
        </p>
      )}
      {!commentSubmitted && (
        <form action="submit" onSubmit={handleSubmitComment} className={form}>
          <label htmlFor="name">
            <p>Your Name</p>
            <input
              id="name"
              name="name"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </label>
          <label htmlFor="comment">
            <p>Your Response</p>
            <textarea
              name="comment"
              id="comment"
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit" className={submitButton}>
            Submit Response
          </button>
        </form>
      )}
    </div>
  );
};

export default CommentModal;
