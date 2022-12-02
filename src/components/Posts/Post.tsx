import React from 'react';
import {EnterPosts} from "../../../type";
import {NavLink} from "react-router-dom";


interface Props {
  post: EnterPosts;
}

const Post:React.FC<Props> = ({post}) => {
  return (
    <div>
      <div>{post.date}</div>
      <div>{post.name}</div>
      <div>{post.title}</div>
      <NavLink to={`/post/${post.id}`} className="readMore">Read more </NavLink>
    </div>
  );
};

export default Post;