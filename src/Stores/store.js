import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search";
import gifDetail from "./gifId";
export default configureStore({
    reducer: {
        search: searchReducer,
        gif: gifDetail,
    },
});