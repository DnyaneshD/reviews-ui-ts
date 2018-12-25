import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

export default function configureStore() {
  const windowIfDefined =
    typeof window === "undefined" ? null : (window as any);
  const composeEnhancers =
    windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}
