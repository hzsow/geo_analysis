import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(saga);