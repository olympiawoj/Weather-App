import React from "react";

const Searchbar = props => {
  console.log({ props });
  return (
    <form className="searchbar" onSubmit={props.searchZipcode}>
      <span aria-label="🔍" role="img" onClick={props.searchZipcode}>
        🔍
      </span>
      <input
        className="input"
        type="text"
        pattern="[0-9]*"
        name=""
        placeholder=" Search zip code"
        value={props.zipCode}
        onChange={event => props.handleChange(event)}
      />
    </form>
  );
};

export default Searchbar;
