import { applyMiddleware, createStore } from 'redux';
import modules from './modules';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk'; 

const logger = createLogger();
//applyMJiddleware 함수를 통해 미들웨어를 추가해준다. 여러 개도 ,로 구분해서 넣을 수 있다.
const store = createStore(modules, applyMiddleware(logger, ReduxThunk));

export default store;