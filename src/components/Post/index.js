import React from "react";

import "./index.css";

function Post({ title, date, author, text, highlights, image }) {
  return (
    <article>
      <h2>{title}</h2>
    </article>
  );
}

export default Post;
