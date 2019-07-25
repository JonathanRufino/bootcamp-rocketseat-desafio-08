import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddlware = createSagaMiddleware();

const enhancer = __DEV__
  ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddlware)
    )
  : applyMiddleware(sagaMiddlware);

const store = createStore(rootReducer, enhancer);

sagaMiddlware.run(rootSaga);

export default store;
