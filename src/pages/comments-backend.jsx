import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import fbApp from "../firebase-config";

import Layout from "../components/Layout/Layout";

const CommentsBackend = () => {
  const [tbaComments, setTbaComments] = useState([]);
  useEffect(() => {
    const database = getDatabase(fbApp);

    const dbRef = ref(database);

    onValue(dbRef, (response) => {
      const newCommentsState = [];
      const fbData = response.val();
      console.log(fbData);

      for (let key in fbData) {
        newCommentsState.push({ key: key, comment: fbData[key] });
      }

      setTbaComments(newCommentsState);
    });
  }, []);

  return (
    <Layout>
      <section>
        <h1>Welcome to the Comments Backend!</h1>
        <p>
          You can use this page to approve comments that will appear on the live
          site. Also, if you're seeing this and are not part of the Probably
          Theatre Collective team, get out of here! This is sneaky private
          business and for THEIR EYES ONLY! Promise you're supposed to be here?
          Okay great, enjoy the powers of clicking buttons.
        </p>
        {tbaComments.map((commentObj) => {
          const { key, comment } = commentObj;
          return (
            <div key={key}>
              <h2>{comment.name}</h2>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default CommentsBackend;
