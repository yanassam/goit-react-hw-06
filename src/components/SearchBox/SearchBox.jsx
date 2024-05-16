import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.addContact}>
      <label htmlFor="findId">Find contacts by name</label>
      <input
        className={s.find}
        type="search"
        name="find"
        id="findId"
        placeholder="Enter name..."
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
