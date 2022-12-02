import React from 'react';
import './Post';
import Post from "./Post";
import type {EnterPosts} from "../../../type";

interface Props {
  posts: EnterPosts[];
}

const Posts:React.FC<Props> = ({posts}) => {
  return (
    <>
    <h4>Posts:</h4>
      {posts.map(post => (
        <Post key={post.id} post={post}/>
      ))}
    </>
  );
};

export default Posts;