export interface PostModel {
  author: string;
  body: string;
}

export interface PostsListModel {
  isPosting: boolean;
  onStopPosting: () => void;
}

export interface NewPostModel {
  onAddPost: (post: PostModel) => void;
  onCancel: () => void;
}
