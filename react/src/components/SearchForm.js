import React from 'react';

const SearchForm = ({handleSearchFormSubmit}) => {
  let input;
  return (
    <div>
      <input type='text' ref={node => {input = node;}} placeholder='Please Enter A Movie'/>
      <button onClick={() => {
        handleSearchFormSubmit(input.value);
        input.value = '';
      }}>
        Find Movie
      </button>
    </div>
  );
};

export default SearchForm;
