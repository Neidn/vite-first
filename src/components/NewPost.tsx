import classes from './NewPost.module.css';

import {NewPostModel} from "../model/postModel";

const NewPost = ({onBodyChange, onAuthorChange}: NewPostModel) => {

  return (
      <form className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
              id="body"
              rows={3}
              onChange={onBodyChange}
              required/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
              type="text"
              id="name"
              onChange={onAuthorChange}
              required/>
        </p>
      </form>
  );
};

export default NewPost;
