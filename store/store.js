import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga/sagas'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));
export default store;

sagaMiddleware.run(mySaga);