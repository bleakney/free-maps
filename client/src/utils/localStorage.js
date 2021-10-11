export const getSavedItems = () => {
    const savedItems = localStorage.getItem('saved_items')
      ? JSON.parse(localStorage.getItem('saved_items'))
      : [];
  
    return savedItems;
  };
  
  export const saveItems = (bookItemArr) => {
    if (bookItemArr.length) {
      localStorage.setItem('saved_items', JSON.stringify(bookItemArr));
    } else {
      localStorage.removeItem('saved_items');
    }
  };
  
  export const removeItem = (item) => {
    const savedItems = localStorage.getItem('saved_items')
      ? JSON.parse(localStorage.getItem('saved_items'))
      : null;
  
    if (!savedItems) {
      return false;
    }
  
    const updatedSavedItems = savedBookItems?.filter((savedItem) => savedItem !== Item);
    localStorage.setItem('saved_items', JSON.stringify(updatedSavedItems));
  
    return true;
  };
  