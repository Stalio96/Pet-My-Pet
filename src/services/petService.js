import * as request from '../services/requester';

const baseUrl = 'http://localhost:3030';

export async function getAll() {
    let result = await request.get(`${baseUrl}/data/pets?sortBy=_createdOn%20desc`);

    return result;
}

export async function create(petData, token) {
    let response = await fetch(`${baseUrl}/data/pets`, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ ...petData, likes: [] })
    });

    let result = await response.json();
    return result;
}

export async function update(petId, petData) {
    let url = `${baseUrl}/data/pets/${petId}`;
    
    let result = await request.put(url, petData);

    return result;
}

export async function getOne(petId) {
    let response = await fetch(`${baseUrl}/data/pets/${petId}`);

    let result = await response.json();

    return result;
}

export async function destroy(petId, token) {
    let response = await fetch(`${baseUrl}/data/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });

    return response.json();
}

export async function like(petId, pet, token) {
    const response = await fetch(`${baseUrl}/data/likes/${petId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(pet)
    });

    return response.json();
}