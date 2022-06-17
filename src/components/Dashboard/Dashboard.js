import * as petService from '../../services/petService'
import { useEffect, useState } from 'react';

import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    let [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
        .then(result => {
            console.log(result)
            setPets(result);
        });
    }, [])
    return (
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-pets-list">
                {pets.map(x => <DashboardCard key={x._id} pet={x} />)}
            </ul>
            <p class="no-pets">No pets in database!</p>
        </section>
    );
}

export default Dashboard;