import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {useNavigate} from 'react-router-dom';
import AddForm from "../AddForm/AddForm";
import {EnterPosts, PostApi} from "../../../type";

interface Props {
  post: EnterPosts;
}

const List: React.FC<Props> = ({post}) => {
  const navigate = useNavigate();

  const createPost = async (post: PostApi) => {
    try {
      alert(123)

      await axiosApi.post('/posts.json', post);
      navigate('/');
    } finally {

    }
  };

  return (
    <>
      <AddForm onSubmit={createPost}/>
    </>
  );
};

export default List;