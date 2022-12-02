import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import type {EnterPosts, PostApi} from "../../../type";
import Posts from "../Posts/Posts";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const [posts, setPosts] = useState<PostApi[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const postsResponse = await axiosApi.get<EnterPosts>('/posts.json');
        const posts = Object.keys(postsResponse.data).map(key => {
          const post = postsResponse.data;
          console.log(post)
          post.id = key;
          return post;
        });
        setPosts(posts);
      } finally {
        setLoading(true);
      }
    }
    getPosts().catch(console.error);
  }, []);

  let post = (
    <div className="posts">
      {posts.map(post => (
        <Posts date={post.date} title={post.title} descriptions={post.descriptions}/>
      ))}
    </div>
  );

  if (loading) {
    post = <Spinner/>
  }

  return (
    <>
      <div className="home">
        {post}
      </div>
    </>
  );
};

export default Home;