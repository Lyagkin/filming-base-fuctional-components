import { useState } from "react";

export default function Search({ searchFilmByName }) {
  const [searchString, setSearchString] = useState("");
  const [filter, setFilter] = useState("");

  const setEventTargetNameInState = (e, state, str) => {
    const name = e.target.name;

    if (name === state) {
      setSearchString(str);
    } else {
      setFilter(str);
    }
  };

  const setSearchInputValueInState = (e) => {
    if (e.target.value === "series" || e.target.value === "movie") {
      setEventTargetNameInState(e, searchString, `&type=${e.target.value}`);
    } else if (e.target.value === "all") {
      setEventTargetNameInState(e, searchString, "");
    } else {
      setSearchString(e.target.value);
    }
  };

  const onKeyPressSearh = (e) => {
    if (e.code === "Enter") {
      searchFilmByName(searchString, filter);
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search"
          type="search"
          className="validate"
          placeholder="Search"
          name="searchString"
          value={searchString}
          onChange={setSearchInputValueInState}
          onKeyDown={onKeyPressSearh}
        />
        <button onClick={() => searchFilmByName(searchString, filter)} className="buttonSearch">
          Search
        </button>
        <div className="inputRadio">
          <label>
            <input className="with-gap" name="filter" value="all" type="radio" onChange={setSearchInputValueInState} />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter"
              value="movie"
              type="radio"
              onChange={setSearchInputValueInState}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="filter"
              value="series"
              type="radio"
              onChange={setSearchInputValueInState}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    </div>
  );
}
