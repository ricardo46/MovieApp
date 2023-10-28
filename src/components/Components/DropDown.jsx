import { GeneralStyledSelect } from "./StyledComponents";

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
      <GeneralStyledSelect onChange={onChangeFunction} defaultValue="default">
        <option value="default">{defaultDropDownValue}</option>
        {list.map((list) => (
          <option key={list[listIterator]} value={list[listIterator]}>
            {list[itemPropertyToShow]}
          </option>
        ))}
      </GeneralStyledSelect>
    </>
  );
};

export default DropDown;
