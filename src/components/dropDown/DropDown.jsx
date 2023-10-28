import { StyledSelect } from "../StyledComponents";

const DropDown = ({
  onChangeFunction,
  defaultDropDownValue,
  list,
  listIterator,
  itemPropertyToShow,
}) => {
  console.log("drop list", list);
  return (
    <>
      <StyledSelect onChange={onChangeFunction} defaultValue="default">
        <option value="default">{defaultDropDownValue}</option>
        {list.map((list) => (
          <option key={list[listIterator]} value={list[listIterator]}>
            {list[itemPropertyToShow]}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};

export default DropDown;
