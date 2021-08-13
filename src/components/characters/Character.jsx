import React from 'react';
import PropTypes from 'prop-types';

function Character({ name, image }) {
  return (
    <>
      <img src={image} alt={name} />
      <h2> {name} </h2>
    </>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
