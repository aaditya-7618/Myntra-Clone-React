import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";

const myntraStore = configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
    }
});

export default myntraStore;