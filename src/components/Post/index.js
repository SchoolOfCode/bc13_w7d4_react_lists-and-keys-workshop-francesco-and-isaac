import React from 'react';

import './index.css';

function Post({title,date,author,text,highlights,image}) {
  return <article title={title} date={date} author={author} text={text} highlights={highlights} image={image}></article>;
}

export default Post;
