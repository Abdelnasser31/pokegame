import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import './Pokegame.css';
export class Pokegame extends Component {
    randomDex(){
        let data = []
        let currentIndex = this.props.data.length, randomIndex;
        while (data.length < 8) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            data.push(this.props.data[randomIndex]);
            currentIndex -= 1;
            [this.props.data[currentIndex], this.props.data[randomIndex]] = [this.props.data[randomIndex], this.props.data[currentIndex]]
        }
        return data;
    }
    static  defaultProps = {
        data: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    }
    render() {
        const data = this.randomDex();
        const data1 = data.slice(0,4);
        const data2 = data.slice(4);
        const data1Exp = data1.reduce((a, b) => a + b.base_experience, 0);
        const data2Exp = data2.reduce((a, b) => a + b.base_experience, 0);
        const isWinner = data1Exp > data2Exp;
        return (
            <div className='Pokegame'>
                
                {isWinner ? <h1 className='Pokegame-winner'>Winning Hand</h1> : <h1 className='Pokegame-loser'>Losing Hand</h1>}
                <h3 className='Pokegame-exp'>Total Exp: {data1Exp} </h3>
                <Pokedex data = {data1} />
            
                {!isWinner ? <h1 className='Pokegame-winner'>Winning Hand</h1> : <h1 className='Pokegame-loser'>Losing Hand</h1>}
                <h3 className='Pokegame-exp'>Total Exp: {data2Exp} </h3>
                <Pokedex data = {data2}/> 
                
            </div>
        );
    }
}

export default Pokegame;
