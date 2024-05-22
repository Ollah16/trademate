import { navReducer } from "./navSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { userReducer } = require("./userSlice");


export const userStore = configureStore({
    reducer: {
        user: userReducer,
        nav: navReducer
    }
})