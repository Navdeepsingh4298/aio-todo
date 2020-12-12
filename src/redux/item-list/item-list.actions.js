import ItemListActionTypes from './item-list.types';

export const addItem = item => ({
  type: ItemListActionTypes.ADD_ITEM,
  payload: item
});

export const removeItem = item => ({
  type: ItemListActionTypes.REMOVE_ITEM,
  payload: item
});

export const editItem = item => ({
  type: ItemListActionTypes.EDIT_ITEM,
  payload: item
});

