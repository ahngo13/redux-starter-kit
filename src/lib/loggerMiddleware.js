const loggerMiddleware = store => next => action => {
    //store 객체 안에 있는 state값 가져오기
    console.log('state:', store.getState());
    
    //action 출력
    console.log('action:', action);

    //액션을 다음 미들웨어나 리듀서로 넘기기
    const result = next(action);

    //액션 처리 후  store 객체 안의 state값 가져오기
    console.log('next state:', store.getState());

    //store.dispatch(ACTION_TYPE)의 결과로 설정됨
    return result;
}

export default loggerMiddleware;