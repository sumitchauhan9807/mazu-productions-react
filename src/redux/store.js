import {createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cakeReducer from './cake/cakeReducer'
const persistedReducer = persistReducer({
  key: 'root',
  storage,
}, cakeReducer)
// const store = createStore(cakeReducer)
export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}
// export default store