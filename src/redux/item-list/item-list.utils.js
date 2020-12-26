export const addItem = (items, itemToAdd) => {
  if (itemToAdd !== "")
    return [...items, itemToAdd];
  else
    return [...items];
};

export const removeItem = (items, itemToRemove) => {
  return items.filter((item, index) => {
    return index !== itemToRemove
  })
};

export const editItem = (items, itemToEdit, itemValue) => {
  return items.find((item, index) => {
    return index === itemToEdit
  });
};
// TO DO: make to editable