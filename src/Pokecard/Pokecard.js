import React, {Component} from 'react';
import './Pokecard.css';

export class Pokecard extends Component {

  render() {
    const {name, id, type, base_experience} = this.props
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{name}</h1>
        <img
          src={` https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

Pokecard.defaultProps = {
  name: 'Pikachu',
  id: '25',
  type: 'electric',
  base_experience: 72
}
export default Pokecard;
