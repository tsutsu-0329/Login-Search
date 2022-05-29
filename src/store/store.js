import { createStore } from "redux";

const initialState = {
  posts: [],
};

const reducer = ((state = initialState), action);
switch (action.data) {
  case "GET_DATA":
    return { posts: action.payload };
  default:
    return state;
}

const store = createStore(reducer);

export default store;
