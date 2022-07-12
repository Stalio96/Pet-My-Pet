import { useState, useEffect } from 'react';

import * as petService from '../../services/petService';
import { useAuthContext } from '../../contexts/AuthContext';

import DashboardCard from '../Dashboard/DashboardCard';

export const MyPet = () => {
    const [pets, setPets] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        petService.getMyPets(user._id)
            .then(petResult => {
                setPets(petResult);
                console.log(petResult)
            })
    }, [])
    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>

            {pets.length > 0
                ? <ul className="other-pets-list">
                    {pets.map(x => <DashboardCard key={x._id} pet={x} />)}
                </ul>
                : <p className="no-pets">No pets in database!</p>
            }
        </section>
    );
}

export default MyPet;