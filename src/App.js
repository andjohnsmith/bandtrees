import React, { Component } from 'react';
import './App.css';

const list = [
  {
    name: 'Nirvana',
    start: '1987',
    end: '1994',
    objectID: 0,
  },
  {
    name: 'Car Seat Headrest',
    start: '2010',
    end: '',
    objectID: 1,
  },
];

const isSearched = searchTerm => item =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { list, searchTerm: '' };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.onSearchChange} />
        </form>
        {this.state.list
          .filter(item =>
            item.name
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase()),
          )
          .map(item => (
            <div key={item.objectID}>
              <span>{item.name}</span>
              <span>{item.start}</span>
              <span>{item.end || 'present'}</span>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
