import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        name="name"
        onChange={props.btnSearch}
        type="text"
        placeholder="Search Foods"
      />
    </div>
  );
}

export default Search