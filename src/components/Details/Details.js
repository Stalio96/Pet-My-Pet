import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as petService from '../../services/petService';

const Details = () => {
    let [pet, setPet] = useState({});
    let { petId } = useParams();

    useEffect(() => {
        petService.getOne(petId)
        .then(result => {
            setPet(result);
        })
    }, []);

    return (
        <section id="details-page" class="details">
            <div class="pet-information">
                <h3>Name: {pet.name}</h3>
                <p class="type">Type: {pet.type}</p>
                <p class="img"><img src={pet.imageUrl} /></p>
                <div class="actions">
                    <Link class="button" to='#'>Edit</Link>
                    <Link class="button" to='#'>Delete</Link>

                    <Link class="button" to='#'>Like</Link>

                    <div class="likes">
                        <img class="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: 0</span>
                    </div>
                </div>
            </div>
            <div class="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}

export default Details;