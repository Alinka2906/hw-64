import React, {useState} from 'react';
import './AddForm.css';
import {EnterPosts, PostApi} from "../../../type";
import axiosApi from "../../axiosApi";
import {useNavigate} from 'react-router-dom';


interface Props {
  onSubmit: (post: EnterPosts) => void;
  existingPost?: PostApi;
}

const AddForm: React.FC<Props> = ({onSubmit, existingPost}) => {
  const initialState = existingPost ? {
    ...existingPost,
  } : {
    date: '',
    name: '',
    title: '',
    descriptions: '',
  }

   const [posts, setPosts] = useState<EnterPosts>(initialState);



  const onPostsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPosts(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    alert(123)
    e.preventDefault()
    onSubmit({
      ...posts
    });
    console.log(123)
  };


  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="titleForm">Add new post</h4>
      <div className="form">
        <div className="field">
          <input
            type="date"
            name="date"
            id="date"
            className="form-input"
            required
            value={posts.date}
            onChange={onPostsChange}
          />
        </div>
        <div className="field">
          <input
            type="text"
            name="title"
            id="title"
            className="form-input"
            required
            placeholder="Enter the name of the post"
            value={posts.title}
            onChange={onPostsChange}
          />
        </div>
        <div className="field">
        <textarea
          name="descriptions"
          id="descriptions"
          className="form-input"
          required
          placeholder="Enter your post"
          value={posts.descriptions}
          onChange={onPostsChange}
        />
        </div>
        <div className="field">
          <button type="submit" className="btnForm">{existingPost ? 'Update' : 'Create'}</button>
        </div>
      </div>
    </form>
  );
};

export default AddForm;