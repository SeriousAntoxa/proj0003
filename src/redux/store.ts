import { applyMiddleware, combineReducers, createStore, compose } from "redux"
import thunk from "redux-thunk"
import newsReducer from "./news-reducer"
import storyReducer from "./story-reducer"

let reducers = combineReducers({
    news: newsReducer,
    story: storyReducer
})

type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

  //@ts-ignore
  window._store_ = store

export default store
