import { combineReducers } from '@reduxjs/toolkit';


// Root reducer for the store of the application
const rootReducer = combineReducers({
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
