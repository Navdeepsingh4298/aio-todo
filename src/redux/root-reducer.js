import { combineReducers } from 'redux';

// other reducers
import itemListReducer from './item-list/item-list.reducer';

const rootReducer = combineReducers({
  itemList: itemListReducer
});

export default rootReducer;