import React from 'react';

const Filter = ({ value, onChangeFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input type="text" name="name" onChange={onChangeFilter} value={value} />
  </>
);

export default Filter;
