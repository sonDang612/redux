import { createAction, createReducer, current } from "@reduxjs/toolkit";
import { Post } from "../../types/blog.type";
import { initialPostList } from "../../constants/blog";

type BlogState = {
  postList: Post[];
  updatingPost: Post | null
};

const initialState: BlogState = {
  postList: initialPostList,
  updatingPost: null
};

export const addPost = createAction<Post>("blog/addPost");
export const deletePost = createAction<Post['id']>("blog/deletePost");
export const startUpdatingPost = createAction<Post>("blog/startUpdatingPost");
export const cancelUpdatingPost = createAction("blog/cancelUpdatingPost");
export const updatePost = createAction<Post>("blog/updatePost");


const blogReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(addPost, (state, action) => {
    const post = action.payload;
    state.postList.push(post);
  })
  .addCase(deletePost, (state, action) => {
    const postId = action.payload;
    state.postList = state.postList.filter(post => post.id !== postId);
  })
  .addCase(startUpdatingPost, (state, action) => {
    const updatingPost = action.payload;
    state.updatingPost = updatingPost;
  })
  .addCase(cancelUpdatingPost, (state) => {
    state.updatingPost = null;
  })  
  .addCase(updatePost, (state, action) => {
    const updatedPost = action.payload;
    state.postList = state.postList.map(post => post.id == updatedPost.id ? updatedPost : post);
    state.updatingPost = null;
  });
});

export default blogReducer;
