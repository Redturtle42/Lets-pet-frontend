class PetService {
    constructor(pets) {
        this.petList = pets;
    }

    getAllPets = () => this.petList;

    getPetsByCategory = (category) => {
        return this.petList
            .filter((item) => category.includes(item.category))
    };

    getSpeciesByCategory = (category) => {
        let species = this.petList
            .filter((item) => item.category == category)
            .map(item => item.species)
            .sort();

        return [...new Set(species)];
    }

    getBreedBySpecies = (species) => {
        let breed = this.petList
            .filter((item) => item.species == species)
            .map(pet => pet.breed)
            .sort();

        return [...new Set(breed)];
    }

    getNamesByBreedAndSpecies = (breed, species) => {
        return this.petList
            .filter((item) => item.breed == breed && item.species == species)
            .map(pet => pet.name)
            .sort();
    }
}

export default PetService;