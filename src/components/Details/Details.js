import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import { Button } from 'react-bootstrap';

import usePetState from "../../hooks/usePetSatete";
import { useAuthContext } from '../../contexts/AuthContext';
import * as petService from '../../services/petService';
import Confirm from '../Common/Confirm/Confirm';


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { petId } = useParams();
    const [pet, setPet] = usePetState(petId);
    const [showDelete, setShowDelete] = useState(false);

    const onDelete = (e) => {
        e.preventDefault();

        petService.destroy(petId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            }).finally(() => {
                setShowDelete(false);
            });
    }

    const onDeleteClick = (e) => {
        e.preventDefault();

        setShowDelete(true);
    }

    const ownerBtn = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <Link className="button" to={`/delete/${pet._id}`} onClick={onDeleteClick} >Delete</Link>
        </>
    );

    const likeButton = () => {
        if(pet.likes?.includes(user._id)){
            console.log('user already liked')
            return;
        }

        console.log(pet)

        const likes = [...pet.likes, user._id];
        const likedPet = {...pet, likes};

        petService.like(petId, likedPet, user.accessToken)
            .then((resData) => {
                console.log(resData);
                setPet(state => ({
                    ...state,
                    likes
                }))
            })
    }

    const guestBtn = (<Button className="button" onClick={likeButton}>Like</Button>);

    return (
        <>
            <Confirm show={showDelete} onClose={() => setShowDelete(false)} onSave={onDelete} />
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
        </>
    );
}

export default Details;