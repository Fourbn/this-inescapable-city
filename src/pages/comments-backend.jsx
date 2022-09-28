import React, { useState, useEffect } from "react";
import firebase from "gatsby-plugin-firebase";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Layout from "../components/Layout/Layout";

import {
  hero,
  instructions,
  confirmationModal,
  commentWrapper,
  commentList,
  commentBox,
  algae,
} from "./comments-backend.module.scss";

const CommentsBackend = () => {
  const [tbaComments, setTbaComments] = useState([]);

  useEffect(() => {
    firebase
      .database()
      .ref("/")
      .on("value", (response) => {
        const newCommentsState = [];
        const fbData = response.val();
        for (let key in fbData) {
          newCommentsState.push({ key: key, comment: fbData[key] });
        }
        setTbaComments(newCommentsState);
      });
  }, []);

  const handleDeleteComment = (commentKey) => {
    firebase.database().ref(`/${commentKey}`).remove();
  };

  const handleConfirmDelete = (commentKey) => {
    confirmAlert({
      title: "Are you sure you want to delete this comment?",
      message: (
        <p>
          Once you delete this comment it will be gone FOREVER! Please make sure
          you want to delete this comment before clicking okay.
        </p>
      ),
      buttons: [
        {
          label: "Yes, delete it!",
          onClick: () => handleDeleteComment(commentKey),
        },
        {
          label: "No, I made a mistake.",
          onClick: () => {
            return;
          },
        },
      ],
      overlayClassName: confirmationModal,
    });
  };

  const handleApproveComment = (commentKey) => {
    const approved = {
      displayOnSite: true,
    };
    firebase.database().ref(`/${commentKey}`).update(approved);
  };

  const handleConfirmApprove = (commentKey) => {
    confirmAlert({
      title: "Are you sure you want to approve this comment?",
      message: (
        <p>
          Once approved, this comment will appear on the public site. How scary!
          You can always undo this action later.
        </p>
      ),
      buttons: [
        {
          label: "Yes, approve it!",
          onClick: () => handleApproveComment(commentKey),
        },
        {
          label: "No, I made a mistake.",
          onClick: () => {
            return;
          },
        },
      ],
      overlayClassName: confirmationModal,
    });
  };

  const handleHideComment = (commentKey) => {
    const approved = {
      displayOnSite: false,
    };
    firebase.database().ref(`/${commentKey}`).update(approved);
  };

  const handleConfirmHide = (commentKey) => {
    confirmAlert({
      title: "Are you sure you want to hide this comment?",
      message: (
        <p>
          Once hidden, this comment will disappear from the site. How spooky!
          You can always undo this action later.
        </p>
      ),
      buttons: [
        {
          label: "Yes, hide it!",
          onClick: () => handleHideComment(commentKey),
        },
        {
          label: "No, I made a mistake.",
          onClick: () => {
            return;
          },
        },
      ],
      overlayClassName: confirmationModal,
    });
  };

  return (
    <Layout>
      <section>
        <div className={hero}>
          <h1>Welcome to the Comments Backend!</h1>
          <p className={instructions}>
            You can use this page to approve comments that will appear on the
            live site. Also, if you're seeing this and are not part of the
            Probably Theatre Collective team, get out of here! This is sneaky
            private business and for THEIR EYES ONLY! Promise you're supposed to
            be here? Okay great, enjoy the powers of clicking buttons.
          </p>
          <p className={instructions}>
            Please remember that when you delete something it is gone FOREVER!
          </p>
        </div>
        <div className={commentWrapper}>
          <h2>To be approved...</h2>
          <ul className={commentList}>
            {tbaComments
              .filter((commentObj) => !commentObj.comment.displayOnSite)
              .map((commentObj) => {
                const { key, comment } = commentObj;
                return (
                  <li key={key} className={commentBox}>
                    <h3>The water remembers...</h3>
                    <p>{comment.comment}</p>
                    <button
                      type="button"
                      onClick={() => handleConfirmApprove(key)}
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => handleConfirmDelete(key)}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={commentWrapper}>
          <h2>Visible on public site...</h2>
          <ul className={commentList}>
            {tbaComments
              .filter((commentObj) => commentObj.comment.displayOnSite)
              .map((commentObj) => {
                const { key, comment } = commentObj;
                return (
                  <li key={key} className={`${commentBox} ${algae}`}>
                    <h3>The water remembers...</h3>
                    <p>{comment.comment}</p>
                    <button
                      type="button"
                      onClick={() => handleConfirmHide(key)}
                    >
                      Hide from site
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default CommentsBackend;
