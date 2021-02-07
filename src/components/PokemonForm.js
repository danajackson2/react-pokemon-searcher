import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state={
    name: '',
    hp: 0,
    sprites: {
      front: '',
      back: ''
    }
  }

  handleChangeN = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleChangeH = (e) => {
    this.setState({[e.target.name]:parseInt(e.target.value)})
  }

  handleChangeS = (e) => {
    this.setState({sprites: {...this.state.sprites, [e.target.name]: e.target.value}})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={() => {this.props.newPokemon(this.state)}}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChangeN} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleChangeH} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleChangeS} fluid label="Front Image URL" placeholder="url" name="front" />
            <Form.Input onChange={this.handleChangeS} fluid label="Back Image URL" placeholder="url" name="back" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
