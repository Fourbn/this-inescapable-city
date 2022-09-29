import React, { useEffect, useState } from "react";
import firebase from "gatsby-plugin-firebase";

import Layout from "../components/Layout/Layout";
import CommentBox from "../components/CommentBox/CommentBox";
import Footer from "../components/Footer/Footer";

import {
  commentsHero,
  commentList,
  thankYouMsg,
  submitCommentForm,
  commentListSection,
} from "./comments.module.scss";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("/")
      .on("value", (response) => {
        const newComments = [];
        const fbData = response.val();

        for (let key in fbData) {
          newComments.push({ key: key, comment: fbData[key] });
        }

        setComments(newComments);
      });
  }, []);

  const cardBgColorCycle = ((max) => {
    let count = 0;
    return () => count++ % max;
  })(5);

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
    <>
      <Layout>
        <section className={commentsHero}>
          <h1>The water remembers ...</h1>
          {commentSubmitted ? (
            <div className={thankYouMsg}>
              <p>
                Thank you for your contribution! Your response has been
                submitted and you can check back here tomorrow to see your
                comment. In the meantime, why not go checkout some of the
                artist's work?
              </p>
              <button type="button" onClick={() => setCommentSubmitted(false)}>
                Submit another response
              </button>
            </div>
          ) : (
            <form
              className={submitCommentForm}
              action="submit"
              onSubmit={(e) => handleSubmitComment(e)}
            >
              <label htmlFor="pageComment">
                <p className="sr-only">
                  Answer this prompt: "The water remembers..."
                </p>
                <textarea
                  name="pageComment"
                  id="pageComment"
                  required
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                ></textarea>
              </label>
              <button type="submit">Leave your mark</button>
            </form>
          )}
        </section>
        <section className={commentListSection}>
          <ul className={commentList}>
            {comments.map((commentObj) => {
              const { key, comment } = commentObj;
              return (
                <CommentBox
                  key={key}
                  comment={comment.comment}
                  colorCycle={cardBgColorCycle()}
                />
              );
            })}
          </ul>
        </section>
      </Layout>
      <Footer simple />
    </>
  );
};

export default Comments;
