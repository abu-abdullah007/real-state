import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchParams: {
        Title: '',
        page: '1',
        limit: '30',
        Sort: '',
        sortMethod: 'descending'
    }
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        getSearchParams: (state, action) => {
            state.searchParams = action.payload;
        }
    }
});

export const { getSearchParams } = searchSlice.actions;
export default searchSlice.reducer;