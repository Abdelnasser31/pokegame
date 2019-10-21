import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';
export class Pokedex extends Component {
    render() {
        const {data} = this.props
        return (
            <div className = 'Pokedex'>
                {data.map(pokemon => 
                    <Pokecard id = {pokemon.id}
                              name = {pokemon.name}
                              type = {pokemon.type}
                              base_experience = {pokemon.base_experience}
                              />
                )}
            </div>
        );
    }
}


export default Pokedex;
