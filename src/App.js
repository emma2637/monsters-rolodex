import './App.css';
import React, {Component} from 'react'
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.componet'
class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters:[ ],
      searchField:''
    };
    //this is used to bind the this to the actual context
   /// this.handleChange = this.handleChange.bind(this); the other option is to use arrow function
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) //convert value to json
  .then(users => this.setState({monsters:users}));
}

handleChange= (e) => {
  //set the context first
  this.setState({searchField: e.target.value})
}

  render(){
    //d structuring allow us to do is pull properties off of an object and set htem to c onstants that we put inside
    //this. reference the context where its been invoked
    const {monsters,searchField  } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='Search monster'
                 handleChange={this.handleChange} ></SearchBox>

      <CardList monsters={filteredMonsters}></CardList>
    </div>);
  }

}

export default App;
