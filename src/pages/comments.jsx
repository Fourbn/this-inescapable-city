import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import fbApp from "../firebase-config";

import Layout from "../components/Layout/Layout";
import CommentBox from "../components/CommentBox/CommentBox";

import { commentsHero, commentList } from "./comments.module.scss";

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const database = getDatabase(fbApp);

    const dbRef = ref(database);

    onValue(dbRef, (response) => {
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

  return (
    <Layout>
      <section className={commentsHero}>
        <h1>The water remembers...</h1>
        <ul className={commentList}>
          {comments.map((commentObj) => {
            const { key, comment } = commentObj;
            return <CommentBox key={key} comment={comment.comment} colorCycle={cardBgColorCycle()} />;
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default Comments;
