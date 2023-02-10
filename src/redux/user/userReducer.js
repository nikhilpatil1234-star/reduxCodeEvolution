import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const intialState = {
  loading: true,
  users: [],
  error: "",
};
const userReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        // ...state,
        loading: false,
        users: actions.payload,
        error: "",
      };
    case FETCH_USER_FAILURE:
      return {
        // ...state,
        loading: false,
        users: [],
        error: actions.payload,
      };
    default:
      return state;
  }
};
export default userReducer
