import ItemListActionTypes from './item-list.types';

const INITIAL_STATE = {
  items: []
};

const itemListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemListActionTypes.ADD_ITEM:
      return {
        ...state
      };
    case ItemListActionTypes.REMOVE_ITEM:
      return {
        ...state
      };
    case ItemListActionTypes.EDIT_ITEM:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default itemListReducer;