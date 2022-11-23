import { createStore } from "redux";
import favoritesReducer from "./services/reducers/favoritesReducer";

function configureStore(state = { selected: true }) {
  return createStore(favoritesReducer,state);
}

export default configureStore;