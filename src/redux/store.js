// import {createStore} from 'redux';
// import { persistStore, persistReducer } from 'redux-persist'
// import { combineReducers } from 'redux';
// import storage from 'redux-persist/lib/storage'
// import cakeReducer from './cake/cakeReducer'
// import userReducer from './user/userReducer'
// const persistedReducer = persistReducer({
//   key: 'root',
//   storage,
// }, combineReducers({
//   cake : cakeReducer,
//   // userData : userReducer
// }))
// // const store = createStore(cakeReducer)
// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
// // export default store

import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cakeReducer from './cake/cakeReducer'
import userReducer from './user/userReducer'
import { combineReducers } from 'redux';

const reducers = combineReducers({
  cake:cakeReducer,
  user:userReducer
})
const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, reducers)
// const store = createStore(cakeReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
// export default store