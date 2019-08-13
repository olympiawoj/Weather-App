import React from "react";

const Searchbar = () => {
  const searchZipcode = () => {
    console.log("zip");
  };
  return (
    <form className="searchbar" onSubmit={searchZipcode}>
      <span onClick={searchZipcode}>🔍</span>
      <input
        className="input"
        type="text"
        pattern="[0-9]*"
        name=""
        placeholder=" Search Zip Code"
      />
    </form>
  );
};

export default Searchbar;
