import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';
import './App.css';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='Item'>
        <div>
          <p className="PokeName"> {this.props.pokemon.name} </p>
          <p className="PokeType"> {this.props.pokemon.type} </p>
          <p> Average Weight: {this.props.pokemon.averageWeight.value} kg </p>
        </div>
        <div>
          <Image source={this.props.pokemon.image} alternativeText="Pokemon image" />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};

export default Pokemon;