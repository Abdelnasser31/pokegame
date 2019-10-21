import React, {Component} from 'react'
import './PokemonLoader.css'
export class PokemonLoader extends Component {
  render() {
    return (
    <div className='Poke-loader'>
        <h2>Ready To</h2>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2>Poke Battle</h2>
      </div>
    )
  }
}

export default PokemonLoader
