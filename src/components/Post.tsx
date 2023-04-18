import {PostModel} from "../model/postModel";

import classes from './Post.module.css'

const Post = ({author, body}: PostModel) => {
  return (
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
  )
}

export default Post
