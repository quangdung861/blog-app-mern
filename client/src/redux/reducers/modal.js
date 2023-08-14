import { INIT_STATE } from '../../constant';
import { getType, showModal, hideModal } from '../actions';

export default function modalReducers(state = INIT_STATE.modal, action) {
  switch (action.type) {
    case getType(showModal): // case'getPostsRequest'
      return {
        isShow: true,
      };
    case getType(hideModal): // case'getPostsRequest'
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
