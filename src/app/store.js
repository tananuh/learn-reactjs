import counterReducer from '../features/Counter/counterSlice'
import userReducer from '../features/User/userSlice'
const {configureStore} = require('@reduxjs/toolkit');
const rootReducer = {
    counter: counterReducer,
    user: userReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;