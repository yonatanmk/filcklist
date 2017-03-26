import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth
    };

    this.widthUpdate = this.widthUpdate.bind(this);
  }

  componentDidMount() {
    setInterval(this.widthUpdate, 500);
  }

  widthUpdate () {
    if (this.state.windowWidth !== window.innerWidth) {
      this.forceUpdate();
    }
  }

  render () {
    let input, placeholder, width;
    if (window.innerWidth <= 600) {
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
                this.props.handleSearchFormSubmit(input.value);
                input.value = '';
              }}>
                Find Movie
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
