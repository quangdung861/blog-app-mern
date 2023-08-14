import { INIT_STATE } from '../../constant';
import { getPosts, getType, createPost, updatePost } from '../actions';

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest): // case'getPostsRequest'
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure):
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };
    case getType(createPost.createPostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(createPost.createPostSuccess):
      return {
        ...state,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    case getType(createPost.createPostFailure):
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };
    case getType(updatePost.updatePostRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(updatePost.updatePostSuccess):
      return {
        ...state,
        isLoading: false,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post,
        ),
      };
    case getType(updatePost.updatePostFailure):
      return {
        ...state,
        isLoading: false,
        err: action.payload,
      };
    default:
      return state;
  }
}
