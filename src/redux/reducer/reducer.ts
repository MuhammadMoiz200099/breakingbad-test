import { combineReducers } from "@reduxjs/toolkit";

import breakingbadReducer from "../slices/breakingbad";

const rootReducer = combineReducers({
  breaking: breakingbadReducer
});

export default rootReducer;
