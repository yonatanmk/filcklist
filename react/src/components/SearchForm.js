import React from 'react';

const SearchForm = ({handleSearchFormSubmit}) => {
  let input;
  return (
    <div className='small-6 small-centered columns'>
      <div className='search-form inline'>
        <input className= 'index-search-bar inline' type='text' ref={node => {input = node;}} placeholder='Please Enter A Movie'/>
        <button className='button inline' onClick={() => {
          handleSearchFormSubmit(input.value);
          input.value = '';
        }}>
          Find Movie
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
