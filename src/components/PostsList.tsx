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
  return (
      <>
        {isPosting &&
            <Modal onClose={onStopPosting}>
              <NewPost
                  onCancel={onStopPosting}/>
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
