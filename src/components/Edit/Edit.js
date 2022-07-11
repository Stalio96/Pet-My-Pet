import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as petService from '../../services/petService';
import usePetState from '../../hooks/usePetSatete';

import { Alert } from 'react-bootstrap';

const types = [
    { value: "dog", text: "Dog" },
    { value: "cat", text: "Cat" },
    { value: "parrot", text: "Parrot" },
    { value: "reptile", text: "Reptile" },
    { value: "other", text: "Other" }
];

const Edit = () => {
    const navigate = useNavigate();
    const { petId } = useParams();
    const [errors, setErrors] = useState({ name: false });
    const [pet, setPet] = usePetState(petId);

    const editSubmitHandler = (e) => {
        e.preventDefault();

        let petData = Object.fromEntries(new FormData(e.currentTarget));

        console.log(petData);

        petService.update(petId, petData)
        .then(() => {
            navigate(`/details/${petId}`)
        })
    }

    const nameChangeHandler = (e) => {
        let currentName = e.target.value;

        if (currentName.length < 3) {
            setErrors(state => ({ ...state, name: 'Your name should be at least 3 characters long!' }));
        } else if (currentName.length > 10) {
            setErrors(state => ({ ...state, name: 'Your name should not be more than 10 characters long!' }));
        } else {
            setErrors(state => ({ ...state, name: false }))
        }
    }

    const typeSet = (e) => {
        setPet(s => ({...s, type: e.target.value}));
    }

    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={editSubmitHandler}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{ borderColor: errors.name ? 'red' : 'inherit' }}>
                            <input type="text" name="name" id="name" defaultValue={pet.name} onBlur={nameChangeHandler} />
                        </span>
                        <Alert variant='danger' show={errors.name}>{errors.name}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={pet.description} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value={pet.type} onChange={typeSet}>
                                {types.map(x => <option key={x.value} value={x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section >
    );
}

export default Edit;