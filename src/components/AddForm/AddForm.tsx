import React, {useState} from 'react';
import './AddForm.css';
import {EnterPosts} from "../../../type";

interface Props {
  onSubmit: (post: EnterPosts) => void;
}

const AddForm: React.FC<Props> = ({onSubmit}) => {
  const [posts, setPosts] = useState<EnterPosts>(
    {date:'', name:'', title: '', descriptions: '', id: ''}
  );

  const onPostsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setPosts(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      ...posts
    });
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
            name="name"
            id="title"
            className="form-input"
            required
            placeholder="Author"
            value={posts.name}
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
          <button type="submit" className="btnForm">Create</button>
        </div>
      </div>
    </form>
  );
};

export default AddForm;