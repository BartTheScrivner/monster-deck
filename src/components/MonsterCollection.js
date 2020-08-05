import React from 'react'
import MonsterLi from './MonsterLi'

class MonsterCollection extends React.Component {
  render() {
    return (
      <ul className='monster-list'>
        {this.props.collection.map(monster => <MonsterLi monster={monster}/>)}
      </ul>
    )
  }
}

export default MonsterCollection