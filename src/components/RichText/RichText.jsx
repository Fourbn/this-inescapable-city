import React from "react";

import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Link } from "gatsby";

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
        return <p>{children}</p>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const regex = /http/gi;

        if (regex.test(node.data.uri)) {
          return (
            <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          );
        } else {
          return <Link to={node.data.uri}>{children}</Link>;
        }
      },
    },
  };

  return <div>{renderRichText(richText, options)}</div>;
};

export default RichText;
