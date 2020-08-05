import React from 'react'

class MonsterLi extends React.Component {
    render() {
        const monster = this.props.monster;
        return (
            <li className='monster-li'>
                <div id={monster.slug}>
                    <h4>{monster.name}</h4>
                    <p>Cr: {monster.challenge_rating}</p>
                    <p>Size: {monster.size} Type: {monster.type}</p>
                </div>
            </li>

        )
    }
}

export default MonsterLi