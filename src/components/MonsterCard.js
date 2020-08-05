import React from 'react'

class MonsterCard extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const monster = this.props.monster;
    return ( 
      <div className="card" id={monster.slug}>
        <div><h3>{monster.name}</h3><p>CR: {monster.challenge_rating}</p></div>
        <div><img src="placeholder.png" alt="monster-face"/></div>
          <p><em>{monster.size} {monster.type} // {monster.alignment}</em></p>
          <hr></hr>
          <p>|| HP:{monster.hit_points} |======| AC: {monster.armor_class} ||</p>
          <hr></hr>
          <p>STR: {monster.strength} || DEX: {monster.dexterity} || CON: {monster.constitution}</p>
          <p>WIS: {monster.wisdom} || INT: {monster.intelligence} || CHA: {monster.charisma}</p>
          <hr></hr>
          <button onClick={this.props.collectMonster}>⊕</button>
      </div>
    )
  }
}

export default MonsterCard;