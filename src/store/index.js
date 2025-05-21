'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import uiReducer from './slices/uiSlice';
import { logger } from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

const combinedReducer = combineReducers({
    ui: uiReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'main/RESET_ALL') {
        state = undefined;
    }
    return combinedReducer(state, action);
};

const middlewares = [sagaMiddleware, logger];

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});
