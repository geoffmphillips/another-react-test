import React from 'react';

function Search(props) {
  const { submitSearch } = props;

  const onSearchSubmit = (event) => {
    event.preventDefault();

    submitSearch(event.target.value);
    event.target.value = "";
  }

  const onSearchkeyDown = (event) => {
    if (event.key === "Enter") {
      submitSearch(event.target.value);
      event.target.value = "";
    }
  }

  return (
    <div className="Search">
      <form onSubmit={onSearchSubmit}>
        <input
          onKeyDown={onSearchKeyDown}
          autoComplete="off"
          defaultValue=""
          placeholder="Search for tweets"
        />
        <input
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Search;
