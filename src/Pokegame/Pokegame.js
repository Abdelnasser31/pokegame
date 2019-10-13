import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';

export class Pokegame extends Component {
    randomDex(){
        let data = []
        let currentIndex = this.props.data.length, randomIndex;
        while (data.length < 4) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            data.push(this.props.data[randomIndex]);
            currentIndex -= 1;
            [this.props.data[currentIndex], this.props.data[randomIndex]] = [this.props.data[randomIndex], this.props.data[currentIndex]]
      

        }
        return data;
    }
    render() {
        return (
            <div>
                <Pokedex data = {this.randomDex()} />
                <hr />
                <Pokedex data = {this.randomDex()} />
                
            </div>
        );
    }
}
Pokegame.defaultProps = {
    data: [
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ],
}
export default Pokegame;
