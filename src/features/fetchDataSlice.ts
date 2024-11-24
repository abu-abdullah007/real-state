import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "@/components/utils/Apollo_client";
import { GET_PROJECTS } from "@/graphql/querys";
import { RootState } from "@/redux/store";

// Define the initial state
interface ProjectState {
    projects: any;
    loading: boolean;
    error: string | null;
}

const initialState = {
    projects: null,
    loading: false,
    error: null
} as ProjectState;

// Create async thunk for fetching data
export const fetchDataFromAPI = createAsyncThunk(
    'api/fetchData',
    async (_, { getState }) => {
        const state = getState() as RootState;
        const searchParams = state.search.searchParams;
        
        const { data } = await client.query({
            query: GET_PROJECTS,
            variables: {
                search: searchParams.Title || '',
                page: parseInt(searchParams.page) || 1,
                limit: parseInt(searchParams.limit) || 30,
                order: searchParams.sortMethod === 'ascending' ? 'asc' : 'desc',
                sort: searchParams.Sort || ''
            },
        });
        return data;
    }
);

// Create the slice
const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataFromAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDataFromAPI.fulfilled, (state, action) => {
                state.loading = false;
                state.projects = action.payload.getProjects;
                state.error = null;
            })
            .addCase(fetchDataFromAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default apiSlice.reducer;