import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getGifId = createAsyncThunk("gif/getGifId", async(id) => {
    const url = `https://api.giphy.com/v1/gifs?api_key=deokzgUjxm6QHQdp3H3aca1LSZcCpucc&ids=${id}`;
    return await fetch(url).then((res) => res.json());
});

export const getIdResult = createSlice({
    name: "Gif ID",
    initialState: {
        isLoading: false,
        gif: [],
        isErr: null,
    },
    extraReducers: {
        [getGifId.pending]: (state) => {
            state.loading = true;
        },
        [getGifId.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.gif = action.payload;
            state.isErr = null;
        },
        [getGifId]: (state) => {
            state.isErr = "An error occured";
        },
    },
});

export default getIdResult.reducer;