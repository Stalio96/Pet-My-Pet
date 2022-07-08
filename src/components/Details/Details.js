import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuthContext } from '../../contexts/AuthContext';

import * as petService from '../../services/petService';

const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const [pet, setPet] = useState({});
    const { petId } = useParams();

    useEffect(() => {
        petService.getOne(petId)
            .then(result => {
                setPet(result);
            })
    }, []);

    const onDelete = (e) => {
        e.preventDefault();

        petService.destroy(petId, user.accessToken)
            .then(res => {
                navigate('/dashboard');
            });

    }

    const ownerBtn = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <Link className="button" to={`/delete/${pet._id}`} onClick={onDelete} >Delete</Link>
        </>);

    const guestBtn = (<Link className="button" to='#'>Like</Link>);

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">

                    {user._id && (user._id == pet._ownerId
                        ? ownerBtn
                        : guestBtn
                    )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes?.length}</span>
                    </div>
                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;