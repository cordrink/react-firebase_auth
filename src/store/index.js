import { configureStore } from '@reduxjs/toolkit'
import {modalsSlice} from "./modals/modals-slice";

export default configureStore({
    reducer: {
        MODAL: modalsSlice.reducer
    },
})