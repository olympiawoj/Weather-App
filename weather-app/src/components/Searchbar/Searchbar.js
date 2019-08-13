import React from "react";

const Searchbar = props => {
  const searchZipcode = () => {
    console.log("zip");
  };

  console.log({ props });
  return (
    <form className="searchbar" onSubmit={searchZipcode}>
      <span onClick={searchZipcode}>🔍</span>
      <input
        className="input"
        type="text"
        pattern="[0-9]*"
        name=""
        placeholder=" Search Zip Code"
        value={props.zipCode}
      />
    </form>
  );
};

export default Searchbar;
