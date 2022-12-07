import React from 'react';

const SearchBar = (props) => {
  const {changeGifList } = props;
  const HandleChange = (event) => {
    changeGifList(event.currentTarget)
  }
  return (
      <input type="text" className="form-search form-control" onChange={HandleChange}/>
  );
};

export default SearchBar;
