import { useState, useEffect } from 'react';

import * as petService from '../services/petService';

const usePetState = (petId) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, [petId]);

    return [
        pet, setPet
    ];
}

export default usePetState;