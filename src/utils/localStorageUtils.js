const setLocalStorageItem = (name, item) => {
  try {
    localStorage.setItem(name, item);
  } catch (err) {
    console.log(err);
  }
};

const getLocalStorageItem = (name) => {
  return localStorage.getItem(name);
};

const isLocalStorageItemSet = (name) =>
  getLocalStorageItem(name) ? true : false;

export { setLocalStorageItem, getLocalStorageItem, isLocalStorageItemSet };