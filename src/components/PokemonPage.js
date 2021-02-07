import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons: [],
    allPokes: []
  }

  getAllPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(data => this.setState({pokemons: data, allPokes: data}))
  }

  componentDidMount(){
    this.getAllPokemon()
  }

  selectPokemon = (e) => {
    let filteredP = this.state.allPokes.filter(p => p.name.includes(e.target.value))
    this.setState({pokemons: filteredP})
  } 

  newPokemon = (data) => {
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(newPoke => {
      let newList = this.state.allPokes.concat(newPoke)
      this.setState({allPokes: newList, pokemons: newList})
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon={this.newPokemon}/>
        <br />
        <Search selectPokemon={this.selectPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage
