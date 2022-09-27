import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, remove, update } from "firebase/database";
import fbApp from "../firebase-config";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import Layout from "../components/Layout/Layout";

import { confirmationModal } from "./comments-backend.module.scss";

const CommentsBackend = () => {
  const [tbaComments, setTbaComments] = useState([]);

  useEffect(() => {
    const database = getDatabase(fbApp);

    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const newCommentsState = [];
      const fbData = response.val();

      for (let key in fbData) {
        newCommentsState.push({ key: key, comment: fbData[key] });
      }

      setTbaComments(newCommentsState);
    });
  }, []);

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

  const handleDeleteComment = (commentKey) => {
    const database = getDatabase(fbApp);
    const dbRef = ref(database, `/${commentKey}`);

    remove(dbRef);
  };

  const handleConfirmApprove = (commentKey) => {
    confirmAlert({
      title: "Are you sure you want to approve this comment?",
      message: (
        <p>
          Once approved, this comment will appear on the public site. How scary!
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

  const handleApproveComment = (commentKey) => {
    const database = getDatabase(fbApp);
    const dbRef = ref(database, `/${commentKey}`);
    const approved = {
      displayOnSite: true,
    };

    update(dbRef, approved);
  };

  return (
    <Layout>
      <section>
        <div>
          <h1>Welcome to the Comments Backend!</h1>
          <p>
            You can use this page to approve comments that will appear on the
            live site. Also, if you're seeing this and are not part of the
            Probably Theatre Collective team, get out of here! This is sneaky
            private business and for THEIR EYES ONLY! Promise you're supposed to
            be here? Okay great, enjoy the powers of clicking buttons.
          </p>
        </div>
        {tbaComments
          .filter((commentObj) => !commentObj.comment.displayOnSite)
          .map((commentObj) => {
            const { key, comment } = commentObj;
            return (
              <div key={key}>
                <p>{comment.comment}</p>
                <p>{comment.displayOnSite ? "approved!" : "not approved!"}</p>
                <button type="button" onClick={() => handleConfirmApprove(key)}>
                  Approve
                </button>
                <button type="button" onClick={() => handleConfirmDelete(key)}>
                  Delete
                </button>
              </div>
            );
          })}
      </section>
    </Layout>
  );
};

export default CommentsBackend;
