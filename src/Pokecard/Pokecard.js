import React, {Component} from 'react';
import './Pokecard.css';

export class Pokecard extends Component {
handleId(id) {
    
   if(Math.floor(id / 10)=== 0){
        return `00${id}`;
   }else if(Math.floor(id / 100) === 0){
       return `0${id}`
   }
   return id
}
  render() {
    const {name, id, type, base_experience} = this.props
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-name">{name}</h1>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.handleId(id)}.png`}/>
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
