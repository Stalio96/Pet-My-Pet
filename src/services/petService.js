const baseUrl = 'http://localhost:3030';

export async function getAll() {
    let response = await fetch(`${baseUrl}/data/pets?sortBy=_createdOn%20desc`);

    let result = await response.json();

    return result;
}

export async function create(petData, token) {
    let response = await fetch(`${baseUrl}/data/pets`, {
        method: 'post',
        headers: {
        'content-type': 'application/json',
        'X-Authorization': token
        },
        body: JSON.stringify({...petData, likes: []})
    });

    let result = await response.json();
    return result;
}

export async function getOne(id) {
    let response = await fetch(`${baseUrl}/data/pets/${id}`);

    let result = await response.json();

    return result;
}

export async function destroy(id, token) {
    let response = await fetch(`${baseUrl}/data/pets/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });

    return response.json();
}