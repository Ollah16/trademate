import { createSlice } from "@reduxjs/toolkit"

const userStore = { isLoggedIn: false, username: '', userType: '', isUserTypeClicked: false }

const userSlice = createSlice({
    name: 'user',

    initialState: userStore,

    reducers: {
        authenticateUser(state) {
            state.isLoggedIn = !state.isLoggedIn
        },

        changeUsername(state) {
            state.username = 'user'
        },

        changeUserType(state, action) {
            state.userType = action.payload
        },

        selectUserType(state, action) {
            state.isUserTypeClicked = action.payload
        }

    }
})

export const userReducer = userSlice.reducer

export const { authenticateUser, changeUsername, changeUserType, selectUserType } = userSlice.actions
