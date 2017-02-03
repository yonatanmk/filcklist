import React from 'react';

const SearchForm = ({handleSearchFormSubmit}) => {
  let input;
  return (
    <div className='small-6 small-centered columns'>
      <div className='search-form'>
        <div className='row'>
          <div className='small-9 columns'>
            <input className= 'index-search-bar' type='text' ref={node => {input = node;}} placeholder='Search Movies'/>
          </div>
          <div className='small-3 columns'>
            <button className='button search-button' onClick={() => {
              handleSearchFormSubmit(input.value);
              input.value = '';
            }}>
              Find Movie
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
