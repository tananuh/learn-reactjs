const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name : 'login',
    initialState : 0,
    reducers : {
        login(state, action ) {
            return action.payload;
        },
        logout(state) {
            return "";
        },
    },
});

const {actions , reducer} = userSlice;
export const {login, logout} = actions;
export default reducer;