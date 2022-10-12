import React, { useState } from "react";
import firebase from "gatsby-plugin-firebase";

import {
  modal,
  exitButton,
  modalTitle,
  instructions,
  form,
  submitButton,
} from "./CommentModal.module.scss";

const CommentModal = ({ setFade, fadeProps }) => {
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [userComment, setUserComment] = useState("");

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const newComment = {
      comment: userComment,
      displayOnSite: false,
    };

    firebase.database().ref("/").push(newComment);
    setCommentSubmitted(true);
    setUserComment("");
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
      <h2 className={modalTitle}>
        {commentSubmitted
          ? "Thank you for submitting your comment!"
          : "Contribute to the installation"}
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
          the prompt below.
        </p>
      )}
      {!commentSubmitted && (
        <form action="submit" onSubmit={handleSubmitComment} className={form}>
          <label htmlFor="comment">
            <p>The water remembers...</p>
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
