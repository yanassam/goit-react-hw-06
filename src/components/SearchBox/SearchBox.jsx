import s from "./SearchBox.module.css";
const SearchBox = ({ setSearchContact }) => {
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
          setSearchContact(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBox;
