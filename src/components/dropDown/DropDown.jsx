import { StyledSelect } from "../StyledComponents";

const DropDown = ({
  onChangeFunction,
  defaultDropDownValue,
  list,
  listIterator,
  itemPropertyToShow,
}) => {
  console.log('list222',list)
  return (
    <>
      <StyledSelect onChange={onChangeFunction} defaultValue="default">
        <option value="default">{defaultDropDownValue}</option>
        {list.map((el) => {
          // console.log('list.id',el)
          return (
            <option key={el.id} value={el[listIterator]}>
              {el[itemPropertyToShow]}
            </option>
          );
        })}
      </StyledSelect>
    </>
  );
};

export default DropDown;
