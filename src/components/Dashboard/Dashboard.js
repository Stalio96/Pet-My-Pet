import * as petService from '../../services/petService'
import { useEffect, useState } from 'react';

import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    let [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            });
    }, [])
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            {pets.length > 0
                ? <ul className="other-pets-list">
                    {pets.map(x => <DashboardCard key={x._id} pet={x} />)}
                </ul>
                : <p className="no-pets">No pets in database!</p>
            }
        </section>
    );
}

export default Dashboard;