const validNewListName = (input, lists) => {
  if (stringIsEmpty(input)) return false;

  if (listNameExists(input, getListNamesArray(lists))) return false;
  return true;
};

const listNameExists=(input, lists)=>{
    return lists.includes(input)
}

const getListNamesArray=(lists)=>{
return lists.map(list=>list.name)
}

const stringIsEmpty = (input) => input == "";

export {validNewListName,stringIsEmpty,listNameExists,getListNamesArray}