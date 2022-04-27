import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGif = createAsyncThunk("gif/fetchGif", async(input) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&q=${input}&limit=20&offset=0&rating=Y&lang=en`;

    return await fetch(url).then((res) => res.json());
});

export const searchSlice = createSlice({
    name: "SearchReducer",
    initialState: {
        loading: false,
        error: null,
        results: [],
    },
    extraReducers: {
        [fetchGif.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchGif.fulfilled]: (state, action) => {
            state.loading = false;
            state.results = action.payload;
            state.error = null;
        },
        [fetchGif.rejected]: (state, action) => {
            state.error = "An error occurred";
        },
    },
});

// export const { searchGif } = searchSlice.actions;
export default searchSlice.reducer;