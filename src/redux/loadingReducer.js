import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        setIsLoading: (_, action) => action.payload
    }
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;