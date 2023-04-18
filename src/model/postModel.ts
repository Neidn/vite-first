import {ChangeEvent} from "react";

export interface PostModel {
  author: string;
  body: string;
}

export interface PostsListModel {
  isPosting: boolean;
  onStopPosting: () => void;
}

export interface NewPostModel {
  onBodyChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onAuthorChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
