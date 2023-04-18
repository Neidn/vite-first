import {ChangeEvent, useState} from "react";

import classes from './NewPost.module.css';

import {NewPostModel, PostModel} from "../model/postModel";

const NewPost = ({onCancel}: NewPostModel) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();

    setEnteredBody(event.target.value);
  }

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setEnteredAuthor(event.target.value);
  }

  const submitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData: PostModel = {
      author: enteredAuthor,
      body: enteredBody,
    };

    console.log(postData);
    onCancel();
  }

  return (
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea
              id="body"
              rows={3}
              onChange={bodyChangeHandler}
              required/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input
              type="text"
              id="name"
              onChange={authorChangeHandler}
              required/>
        </p>
        <p className={classes.actions}>
          <button type={'button'} onClick={onCancel}>Cancel</button>
          <button type={'submit'}>Submit</button>
        </p>
      </form>
  );
};

export default NewPost;
