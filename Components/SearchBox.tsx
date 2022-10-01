import * as React from 'react';

export default class SearchBox extends React.Component{
  render(){
    return(
      <div>
        <input
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}