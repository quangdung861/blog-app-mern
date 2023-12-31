import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsState$);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, []);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} sm={6} key={post._id}>
          <Post post={post}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostList;
