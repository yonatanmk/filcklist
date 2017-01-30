import React from 'react';
import { connect } from 'react-redux';
import { setMovieData, logFirstSearchAction } from '../actions';
import SearchForm from '../components/SearchForm';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchFormSubmit: (query) => {
      dispatch(setMovieData(query));
      dispatch(logFirstSearchAction());
    }
  };
};

const SearchFormContainer = connect(null, mapDispatchToProps)(SearchForm);

export default SearchFormContainer;
