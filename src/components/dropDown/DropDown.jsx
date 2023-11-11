import { StyledSelect } from "../StyledComponents";
import { listIsEmpty } from "../../pages/MyAccount/userListsUtils";

const DropDown = ({
  onChangeFunction,
  defaultDropDownValue,
  list,
  listIterator,
  itemPropertyToShow,
  movieListObj,
}) => {
  return (
    <>
      {console.log("list", list)}
      <StyledSelect
        onChange={onChangeFunction}
        defaultValue="default"
        disabled={listIsEmpty(list) ? true : false}
      >
        {listIsEmpty(list) && (
          <option value="default">{"No lists Created"}</option>
        )}
        {!listIsEmpty(list) && (
          <option value="default">{defaultDropDownValue}</option>
        )}
        {list.map((el) => {
          return (
            movieListObj.id != el[listIterator] && (
              <option key={el[listIterator]} value={el[listIterator]}>
                {el[itemPropertyToShow]}
              </option>
            )
          );
        })}
      </StyledSelect>
    </>
  );
};

export default DropDown;
