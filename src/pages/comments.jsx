import React from "react";

import Layout from "../components/Layout/Layout";
import CommentBox from "../components/CommentBox/CommentBox";

const Comments = () => {
  return (
    <Layout>
      <section>
        <h1>Comment Box Prompt</h1>
        <button type="button">Post Your Comment</button>
        <ul>
          <li>
            <CommentBox
              commenterName="Name 1"
              comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fuga dolor, praesentium minus illo, excepturi dicta optio rem ex, odit vitae nesciunt. Alias sunt error ipsa, laboriosam ullam dolores repellendus!"
            />
          </li>
          <li>
            <CommentBox
              commenterName="Name 1"
              comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fuga dolor, praesentium minus illo, excepturi dicta optio rem ex, odit vitae nesciunt. Alias sunt error ipsa, laboriosam ullam dolores repellendus!"
            />
          </li>
          <li>
            <CommentBox
              commenterName="Name 2"
              comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fuga dolor, praesentium minus illo, excepturi dicta optio rem ex, odit vitae nesciunt. Alias sunt error ipsa, laboriosam ullam dolores repellendus!"
            />
          </li>
          <li>
            <CommentBox
              commenterName="Name 3"
              comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fuga dolor, praesentium minus illo, excepturi dicta optio rem ex, odit vitae nesciunt. Alias sunt error ipsa, laboriosam ullam dolores repellendus!"
            />
          </li>
          <li>
            <CommentBox
              commenterName="Name 4"
              comment="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fuga dolor, praesentium minus illo, excepturi dicta optio rem ex, odit vitae nesciunt. Alias sunt error ipsa, laboriosam ullam dolores repellendus!"
            />
          </li>
        </ul>
      </section>
    </Layout>
  );
};

export default Comments;
