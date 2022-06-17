import { Link } from "react-router-dom";

const DashboardCard = ({
    pet
}) => {
    return (
        <li class="otherPet">
            <h3>Name: {pet.name}</h3>
            <p>Type: dog</p>
            <p className="img"><img src={pet.imageUrl} /></p>
            <Link class="button" to={`/details/${pet._id}`}>Details</Link>
        </li>
    );
}

export default DashboardCard;