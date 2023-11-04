import { createSlice } from '@reduxjs/toolkit';

const DemoSlice = createSlice({
    name: 'demo',
    initialState: {
        name: 'demo'
    },
    reducers: {
        changeDemo: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { changeDemo } = DemoSlice.actions;

export default DemoSlice.reducer;
