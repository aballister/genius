import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isVisible: null,
    successIsVisible: null,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        SET_MODAL: (state, action) => ({
            ...state,
            isVisible: action.payload,
        }),
        SET_SUCCESS_MODAL: (state, action) => ({
            ...state,
            successIsVisible: action.payload,
        }),
    },
});

export const {
    SET_MODAL: setModalAction,
    SET_SUCCESS_MODAL: setSuccessModalAction,
} = uiSlice.actions;

export default uiSlice.reducer;