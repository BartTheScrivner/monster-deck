import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import CardList from './components/CardList'
import MonsterCollection from './components/MonsterCollection'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      monsterCollection: []
    };
    this.url = 'https://api.open5e.com/monsters/?limit=100';
  }
  
  componentDidMount() {
  fetch(this.url)
    .then(resp => resp.json())
    .then(data => 
      this.setState({
      monsters: data.results
    }))
}
  

  
  render() {
    return (
    <div className="App">
      <NavBar />
      <div className="container">
        <CardList monsters={this.state.monsters} collectMonster={this.collectMonster}/>
        <MonsterCollection collection={this.state.monsterCollection}/>
      </div>
    </div>
    );
  }

  collectMonster = (e) => {
    const monster = this.state.monsters.find(monster => monster.slug === e.target.parentElement.id);
    this.setState({monsterCollection: [...this.state.monsterCollection, monster]})
  }
}

export default App;
