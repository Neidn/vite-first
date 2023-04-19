import {Link, Form, ActionFunctionArgs, redirect} from "react-router-dom";
import axios from "axios";

import classes from './NewPost.module.css';

import Modal from "../components/common/Modal";
import {PostModel} from "../model/postModel";

const URL = `${import.meta.env.VITE_DUMMY_URL}/${import.meta.env.VITE_DUMMY_DB}`;

const NewPost = () => {

  return (
      <Modal>
        <Form method={'post'} className={classes.form}>
          <p>
            <label htmlFor="body">Text</label>
            <textarea
                id="body"
                name={'body'}
                rows={3}
                required/>
          </p>
          <p>
            <label htmlFor="author">Your name</label>
            <input
                type="text"
                id="author"
                name={'author'}
                required/>
          </p>
          <p className={classes.actions}>
            <Link to={'..'}>Cancel</Link>
            <button type={'submit'}>Submit</button>
          </p>
        </Form>
      </Modal>
  );
};

export default NewPost;

export const action = async ({request}: ActionFunctionArgs) => {
  const formData = await request.formData();

  const postData: PostModel = {
    body: formData.get('body') as string,
    author: formData.get('author') as string,
  };

  await axios.post(URL, postData);

  return redirect('/');
}
