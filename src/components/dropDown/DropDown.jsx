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
    {console.log('list',list)}
      <StyledSelect onChange={onChangeFunction} defaultValue="default">
        <option key={9999} value="default">{defaultDropDownValue}</option>
        {list.map((el) => {
          
          return (
            <option key={el[listIterator]} value={el[listIterator]}>
              {el[itemPropertyToShow]}
            </option>
          );
        })}
      </StyledSelect>
    </>
  );
};

export default DropDown;
