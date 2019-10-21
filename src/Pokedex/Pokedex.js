import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';
export class Pokedex extends Component {
    render() {
       
        const {data, winner: isWinner,Exp} = this.props;
        let title;
        if(isWinner) {
            title = <h1 className='Pokegame-winner'>Winning Hand</h1>
        }else{
            title = <h1 className='Pokegame-loser'>Losing Hand</h1>
        }
        return (
            <div>
            <div>
                 {title}
               <h3 className='Pokegame-exp' >Total Exp: {Exp} </h3>
            </div>
            <div className = 'Pokedex'>
              
                {data.map(pokemon => 
                    <Pokecard id = {pokemon.id}
                              name = {pokemon.name}
                              type = {pokemon.types[0].type.name}
                              base_experience = {pokemon.base_experience}
                              />
                )}
            </div></div>
        );
    }
}


export default Pokedex;
