import {Link} from 'react-router-dom';
import {PostModel} from "../../model/postModel";

import classes from './Post.module.css'

const Post = ({id, author, body}: PostModel) => {
  return (
      <li className={classes.post}>
        <Link to={id}>
          <p className={classes.author}>{author}</p>
          <p className={classes.text}>{body}</p>
        </Link>
      </li>
  )
}

export default Post
