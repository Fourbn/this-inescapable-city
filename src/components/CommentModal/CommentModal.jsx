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
  const [userComment, setUserComment] = useState("");

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const database = getDatabase(fbApp);
    const dbRef = ref(database);

    const newComment = {
      comment: userComment,
      displayOnSite: false,
    };

    push(dbRef, newComment);
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
      <h2 className={prompt}>
        {commentSubmitted
          ? "Thank you for submitting your comment!"
          : "Add your artistry to the site!"}
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
