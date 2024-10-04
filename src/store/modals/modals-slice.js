import {createSlice} from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        showSignIn: false,
        showSignUp: false,
    },
    reducers: {
        toggleIn: (currentSlice, action) => {

            if (currentSlice.showSignIn) {
                currentSlice.showSignIn = false;
                currentSlice.showSignUp = false;
            } else {
                currentSlice.showSignIn = true;
                currentSlice.showSignUp = false;
            }
        },
        toggleUp: (currentSlice, action) => {
            if (currentSlice.showSignUp) {
                currentSlice.showSignIn = false;
                currentSlice.showSignUp = false;
            } else {
                currentSlice.showSignIn = false;
                currentSlice.showSignUp = true;
            }
        },
        closeModal: (currentSlice, action) => {
            currentSlice.showSignIn = false;
            currentSlice.showSignUp = false;
        }
    }
})

const {toggleIn, toggleUp, closeModal} = modalsSlice.actions;
export {toggleIn, toggleUp, closeModal};