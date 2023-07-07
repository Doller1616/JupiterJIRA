import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

store.subscribe(() => {
  console.info("-------------- Redux Store --------------\n",store.getState());
});

sagaMiddleware.run(rootSaga);

export default store;