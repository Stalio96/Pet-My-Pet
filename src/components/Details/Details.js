import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


import usePetState from "../../hooks/usePetSatete";
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import * as petService from '../../services/petService';
import * as likeService from '../../services/likeService';

import { Button } from 'react-bootstrap';
import Confirm from '../Common/Confirm/Confirm';


const Details = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const { petId } = useParams();
    const { addNotification } = useNotificationContext();
    const [pet, setPet] = usePetState(petId);
    const [showDelete, setShowDelete] = useState(false);
    
    useEffect(() => {
        likeService.getPetLikes(petId)
        .then(count => {
            setPet(state => ({...state, likes: count}));
        })
    }, [])

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
        if(user._id == pet._ownerId){
            return;
        }

        if(pet.likes.includes(user._id)){
            return addNotification('You already liked this pet');
        }

        likeService.like(user._id, petId)
            .then(() => {
                setPet(state => ({...state, likes: state.likes + 1}))
                addNotification('Successfully liked a cat', types.success);
            })
    }

    const guestBtn = (<Button className="button" onClick={likeButton} disabled={(pet.likes?.includes(user._id))}>Like</Button>);

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