import React from 'react'
import MonsterCard from './MonsterCard'

class CardList extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (<div className='card-list'>
      {this.props.monsters.map(monster => <MonsterCard monster={monster} collectMonster={this.props.collectMonster}/> )}
    </div>)
  }
}
export default CardList