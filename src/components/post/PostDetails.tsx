import {useLoaderData, Link, ActionFunctionArgs} from 'react-router-dom';
import axios from "axios";

import {PostModel} from "../../model/postModel";

import Modal from "../common/Modal";
import classes from './PostDetails.module.css';

const URL = `${import.meta.env.VITE_DUMMY_URL}/${import.meta.env.VITE_DUMMY_DB}`;

function PostDetails() {
  const post = useLoaderData() as PostModel;

  if (!post) {
    return (
        <Modal>
          <main className={classes.details}>
            <h1>Could not find post</h1>
            <p>Unfortunately, the requested post could not be found.</p>
            <p>
              <Link to=".." className={classes.btn}>
                Okay
              </Link>
            </p>
          </main>
        </Modal>
    );
  }
  return (
      <Modal>
        <main className={classes.details}>
          <p className={classes.author}>{post.author}</p>
          <p className={classes.text}>{post.body}</p>
        </main>
      </Modal>
  );
}

export default PostDetails;

export const loader = async ({params}: ActionFunctionArgs) => {
  const id = params.id as string;
  const response = await axios.get(`${URL}/${id}`);

  return response.data.post;
}
