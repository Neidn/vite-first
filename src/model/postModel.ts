export interface PostModel {
  author: string;
  body: string;
}


export interface NewPostModel {
  onAddPost: (post: PostModel) => void;
}
