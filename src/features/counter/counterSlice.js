import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;

export const selectCount = state => state.counter.count;