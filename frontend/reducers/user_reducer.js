import { 
  RECEIVE_USERS,
  RECEIVE_USER,
  EDIT_USER,
  REMOVE_USER
} from "../actions/user_actions";

const userReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_USERS:
      return {...newState, ...action.users}
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState;
    case EDIT_USER:
      newState[action.user.id] = action.user;
      return newState;
    case REMOVE_USER:
      delete newState[action.userId.id];
      return newState;
    default:
      return state;
  }
}

export default userReducer;