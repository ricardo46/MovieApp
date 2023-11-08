import { StyledSelect } from "../StyledComponents";
import { listsIsEmpty } from "../../pages/MyAccount/userListsUtils";

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
      <StyledSelect onChange={onChangeFunction} defaultValue="default">
        {listsIsEmpty(list) && (
          <option value="default">{"No lists Created"}</option>
        )}
        {!listsIsEmpty(list) && (
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
