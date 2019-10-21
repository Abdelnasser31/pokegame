import React, { Component } from 'react';
import Pokedex from '../Pokedex/Pokedex';
import PokeLoader from '../PokemonLoader/PokemonLoader'
import './Pokegame.css';
let pokemonsData = [];
export class Pokegame extends Component {
    state = {
      pokemons: null
    }
    componentDidMount() {
        this.fetchPokemons();
    }
     fetchPokemons = async () =>  {
      for(let i = 0; i< 8; i++) {
            let randomPoke = Math.floor(Math.random() * 800);
            const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPoke}`);
            const json = await response.json();
            pokemonsData.push(json);
            console.log(json.types[0].type.name)
            

      }
      this.setState({pokemons: pokemonsData})
    }
    render() {
        if(!this.state.pokemons){
            return <PokeLoader/>
        }
        const data1 = this.state.pokemons.slice(0,4);
        const data2 = this.state.pokemons.slice(4);
        const data1Exp = data1.reduce((a, b) => a + b.base_experience, 0);
        const data2Exp = data2.reduce((a, b) => a + b.base_experience, 0);
        const isWinner = data1Exp > data2Exp;
        return (
            <div className='Pokegame'> 
                <Pokedex data = {data1} winner={isWinner} Exp={data1Exp}/>
                <Pokedex data = {data2} winner={!isWinner} Exp={data2Exp}/> 
                
            </div>
        );
    }
}

export default Pokegame;
