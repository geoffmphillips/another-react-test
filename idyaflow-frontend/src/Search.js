import React from 'react';

function Search(props) {
  const { submitSearch, tweets } = props;

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

  const tweetList = tweets.map(tweet => {
    return (
      <div>
        <p>{tweet.text}</p>
      </div>
    )
  })

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
        {tweetList}
      </form>
    </div>
  );
}

export default Search;
