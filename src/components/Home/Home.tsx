import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import type {EnterPosts} from "../../../type";
import Posts from "../Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsResponse = await axiosApi.get<EnterPosts>('/posts.json');
        console.log(postsResponse)
        const posts = Object.keys(postsResponse.data).map(key => ({
            // const post = postsResponse.data[key];
            // post.id = key;

          })
        )
      } finally {

      }
    }
  })
  return (
    <div>

        <Posts posts={posts}/>
    </div>
  );
};

export default Home;