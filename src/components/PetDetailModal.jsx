import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function PetDetailModal({ pet, display, handleClose }) {
    return display ? (
        <div className="modal-container">
            <div className="modal-window" onClick={handleClose}>
                <img src={pet.imageSrc} alt={pet.name} className="petCard-image" />
                <div className="petCard-text-container">
                    <h3>{pet.name ? `${pet.name}` : ""}</h3>
                    <p>{pet.category ? `CATEGORY: ${pet.category}` : ""}</p>
                    <p>{pet.species ? `SPECIES: ${pet.species}` : ""}</p>
                    <p>{pet.breed ? `BREED: ${pet.breed}` : ""}</p>
                    <p>{pet.gender ? `GENDER: ${pet.gender}` : ""}</p>
                    <p>{pet.age ? `AGE: ${pet.age}` : ""}</p>
                    <p>{pet.size ? `SIZE: ${pet.size}` : ""}</p>
                    <p>{pet.rating ? `RATING: ${pet.rating}` : ""}</p>
                    <p>{pet.description ? `ABOUT: ${pet.description}` : ""}</p>
                    <p>{pet.price ? `PRICE: $${pet.price}` : ""}</p>

                </div>
            </div>
        </div>
    ) : null;
}

PetDetailModal.propTypes = {
    pet: PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        species: PropTypes.string,
        breed: PropTypes.string,
        gender: PropTypes.string,
        age: PropTypes.number,
        size: PropTypes.string,
        rating: PropTypes.number,
        description: PropTypes.string
    })

}

export default PetDetailModal;