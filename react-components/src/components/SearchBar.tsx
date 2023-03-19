import React, { Component } from 'react';
import './SearchBar.css';

type MyProps = {
  visible: boolean;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export class SearchBar extends Component<MyProps, { searchValue: string }> {
  constructor(props: MyProps) {
    super(props);
    console.log(this?.state?.searchValue + ' constr');
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
    console.log(this?.state?.searchValue + ' constr');
    this.updateSearchValue = this.updateSearchValue.bind(this);
  }

  componentDidMount(): void {
    this.setState({
      searchValue: '',
    });
    this.setState({
      searchValue: localStorage.getItem('searchValue')!,
    });
    console.log(this.state.searchValue + ' mount');
  }
  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
    console.log(this.state.searchValue + ' unmount');
  }

  updateSearchValue(evt: React.ChangeEvent<HTMLInputElement>) {
    const val = evt.target.value;
    this.setState({
      searchValue: val,
    });
    localStorage.setItem('searchValue', val);
    console.log(this.state.searchValue + ' update');
  }

  render() {
    return (
      <div className={this.props.visible ? 'search-bar' : 'search-bar-none'}>
        <input
          value={this.state.searchValue}
          onChange={this.updateSearchValue}
          id="search"
          type="text"
          className="search-bar__input"
          placeholder="Type your request here"
        />
        <button type="submit" className="search-bar__btn">
          <i className="gg-search "></i>
        </button>
      </div>
    );
  }
}

export default SearchBar;
