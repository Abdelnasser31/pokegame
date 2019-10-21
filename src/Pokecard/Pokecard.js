import React, {Component} from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number )
export class Pokecard extends Component {
// padToThree(id) {
    
//    if(Math.floor(id / 10) === 0){
//         return `00${id}`;
//    }else if(Math.floor(id / 100) === 0){
//        return `0${id}`
//    }
//    return id
// }
  render() {
    const {name, id, type, base_experience} = this.props
    let imgSrc = `${POKE_API}${padToThree(id)}.png`
    return (
      <div className="Pokecard">
        
        <img className='Pokecard-image'
          src={imgSrc} alt={name}/>
          <h3 className="Pokecard-name">{name}</h3>
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
