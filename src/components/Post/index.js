import React from "react";

import "./index.css";

function Post({ title, date, author, text}) {
  return <article>
  <h1>{title}</h1>
  <h2>{date}</h2>
  <h3>{author}</h3>
  <p>{text}</p>
  </article>
  
    
  
}

export default Post;
