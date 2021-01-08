import React from 'react';
import CardList from './CardList'

function PetFinder({ service, categories }) {
    return (
        <div>
            <CardList service={service} categories={categories} />
        </div>
    )
}

export default PetFinder;