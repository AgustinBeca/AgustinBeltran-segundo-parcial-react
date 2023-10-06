import React from "react";

import SearchIcon from "./searchIcon";

import "./index.css";

const SearchBox = (props) => {

  function inputChangHandler(event){
    props.onInputMeal(event.target.value);
  };

  return(
  <div className="search-box">
    <SearchIcon />
    <input type="text" placeholder="Busca en este sitio web" onChange={inputChangHandler}/>
  </div>
)};

export default SearchBox;
