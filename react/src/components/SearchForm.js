import React from 'react';

const SearchForm = ({handleSearchFormSubmit}) => {
  let input, placeholder, width;
  if (window.innerWidth <= 500) {
    placeholder = 'Search';
    width = 'small-11';
  } else {
    placeholder = 'Search Movies';
    width = 'small-6';
  }
  return (
    <div className={`${width} small-centered columns`}>
      <div className='content-box'>
        <div className='row'>
          <div className={'small-9 columns'}>
            <input className= 'index-search-bar' type='text' ref={node => {input = node;}} placeholder={placeholder}/>
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
