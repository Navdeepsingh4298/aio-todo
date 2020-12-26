import ItemListActionTypes from './item-list.types';
import { addItem, removeItem, editItem } from './item-list.utils';

const INITIAL_STATE = {
  items: []
};

const itemListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemListActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItem(state.items, action.payload)
      };
    case ItemListActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItem(state.items, action.payload)
      };
    case ItemListActionTypes.EDIT_ITEM:
      return {
        ...state,
        items: editItem(state.items, action.payload)
      };
    default:
      return state;
  }
}

export default itemListReducer;