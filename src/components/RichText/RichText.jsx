import React from "react";

import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const RichText = ({ richText }) => {
  const options = {
    renderMark: {
      [MARKS.ITALIC]: (text) => <span className="italics">{text}</span>,
      [MARKS.BOLD]: (text) => <span className="bold">{text}</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if (children[0] === "\n") {
          return;
        }
        return <p>{children}</p>
      }
    }
  };

  return <div>{renderRichText(richText, options)}</div>;
};

export default RichText;
