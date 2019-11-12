import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list_component';
import { SearchBox } from './components/search-box/search-box_component';
import './App.css';

class App extends Component {
  //by using class Component, we get access to class's state
  constructor() {
    super();

    //we now have access to state
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  //life-cycle methods
  //componentDidMount() calls a block after the component mounts or renders on the DOM
  //this.state.monsters is empty array. Once component mounts, fetch users and place in monsters array
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/usders')
  //     .then(res => res.json())
  //     .then(users => this.setState({ monsters: users }))
  //     .catch(err => console.log('DA error', err));
  // }

  //another way to write componentDidMount()
  async componentDidMount() {
    try {
      //remember, fetch returns a promise
      //await pauses execution and waits until the func comes back with a value
      const getUsersPromise = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      //if we don't await, it will save the promise (which is what was returned) and not the result val into the variable
      //we are awaiting the conversion of the getUsersPromise to json() (also an async method)
      const users = await getUsersPromise.json();

      this.setState({ monsters: users });
    } catch (err) {
      console.log('There is an error');
      throw err;
    }
  }

  //the arrow function automatically binds the context of the function when it sees this.[something]. So in this case, handleChange is bound to the app component context
  //so arrow functions automatically get lexical scoping, which means they bind the this context to the place where the function was initially defined

  //use arrow functions on any class methods that aren't part of react (ie render, componentDidMount)
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  //every Component has a render()
  //remember, every time state changes like with the search field, it will re-render
  render() {
    //for .filter, whatever is returned true (because filter func returns true or false) is what's returned in a new array

    //destructuring: pull vals off an object and assign them to consts inside the leading curly braces
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder={'search monsters'}
          handleChange={this.handleChange}
        ></SearchBox>
        {/* pass in monsters state as a prop in the CardList 
          state exists in a location and trickles down as props
        */}
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
