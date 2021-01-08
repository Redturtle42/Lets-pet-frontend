import React, { useState } from 'react';
import PetDetailModal from './PetDetailModal'
import { Button } from 'react-bootstrap';

function PetCard({ pet }) {
  const [isModalDisplay, setModalDisplay] = useState(false);
  const handleShowModal = () => setModalDisplay(true);
  const handleHideModal = () => setModalDisplay(false);

  return (
    <React.Fragment>
      <div className="petCard-inner-container">
        <img src={pet.imageSrc} alt={pet.name} className="petCard-image" />
        <div className="petCard-text-container">
          <h6>{pet.name}</h6>
          <p>Species: {pet.species}</p>
          <p>Breed: {pet.breed}</p>
          <p>Size: {pet.size}</p>
          <p>Rating: {pet.rating}</p>
          <Button variant="dark" onClick={handleShowModal}>Details</Button>
          <PetDetailModal pet={pet} display={isModalDisplay} handleClose={handleHideModal} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default PetCard;