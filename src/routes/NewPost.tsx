import {ChangeEvent, useState} from "react";
import {Link} from "react-router-dom";

import classes from './NewPost.module.css';

import Modal from "../components/common/Modal";
import {NewPostModel, PostModel} from "../model/postModel";


const NewPost = ({onAddPost}: NewPostModel) => {
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
    onAddPost(postData);
  }

  return (
      <Modal>
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
            <Link to={'..'}>Cancel</Link>
            <button type={'submit'}>Submit</button>
          </p>
        </form>
      </Modal>
  );
};

export default NewPost;
