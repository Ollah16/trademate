const { createSlice } = require("@reduxjs/toolkit");

const navSlice = createSlice({
    name: 'nav',
    initialState: { isNavExpanded: false },
    reducers: {
        handleExpandNav(state) {
            state.isNavExpanded = !state.isNavExpanded
            console.log(state.isNavExpanded)
        }
    }
})

export const navReducer = navSlice.reducer
export const { handleExpandNav } = navSlice.actions
