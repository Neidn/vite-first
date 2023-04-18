import {useState, ChangeEvent} from "react";

import classes from './PostsList.module.css'

import {PostModel, PostsListModel} from "../model/postModel";

import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";

const posts: PostModel[] = [
  {
    author: 'Maximilian',
    body: 'React.js is awesome',
  },
  {
    author: 'Manuel',
    body: 'Check out the full course!',
  }
];

const PostsList = ({isPosting, onStopPosting}: PostsListModel) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredBody(event.target.value);
  }

  const authorChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAuthor(event.target.value);
  }

  return (
      <>
        {isPosting &&
            <Modal onClose={onStopPosting}>
              <NewPost
                  onAuthorChange={authorChangeHandler}
                  onBodyChange={bodyChangeHandler}/>
            </Modal>
        }
        <ul className={classes.posts}>
          {posts.map((post, index) => (
              <Post key={index} author={post.author} body={post.body}/>
          ))}
        </ul>
      </>
  )
}

export default PostsList
