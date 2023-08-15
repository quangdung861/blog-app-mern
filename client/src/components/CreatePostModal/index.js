import React, { useCallback, useState } from 'react';
import { Button, Modal, TextField, TextareaAutosize } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { modalState$ } from '../../redux/selectors';
import useStyles from './styles';
import FileBase64 from 'react-file-base64';
import { hideModal } from '../../redux/actions';
import { createPost } from '../../redux/actions';

const CreatePostModal = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
    attachment: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const onClose = useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    setData({
      title: '',
      content: '',
      attachment: '',
    })
  }, [data, dispatch]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="title"
          value={data.title}
          onChange={(e) =>
            setData({
              ...data,
              title: e.target.value,
            })
          }
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) =>
            setData({
              ...data,
              content: e.target.value,
            })
          }
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
};

export default CreatePostModal;
