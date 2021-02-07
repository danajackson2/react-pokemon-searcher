import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    picFront: true
  }

  handleClick = () => {
    let newBoolean = !this.state.picFront
    this.setState({picFront: newBoolean})
  }

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            {this.state.picFront === true ? <img alt="oh no!" src={this.props.pokemon.sprites.front}/> : <img alt="oh no!" src={this.props.pokemon.sprites.back}/> }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
