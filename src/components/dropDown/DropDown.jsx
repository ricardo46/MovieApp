import { StyledSelect } from "../StyledComponents";

const DropDown = ({
  onChangeFunction,
  defaultDropDownValue,
  list,
  listIterator,
  itemPropertyToShow,
}) => {
  return (
    <>
      <StyledSelect onChange={onChangeFunction} defaultValue="default">
        <option value="default">{defaultDropDownValue}</option>
        {list.map((list) => {
          // console.log('list.id',list)
          return (
            <option key={list[listIterator]} value={list[listIterator]}>
              {list[itemPropertyToShow]}
            </option>
          );
        })}
      </StyledSelect>
    </>
  );
};

export default DropDown;
