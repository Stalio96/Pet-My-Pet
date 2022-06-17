const baseUrl = 'http://localhost:3030';

export async function getAll() {
    let response = await fetch(`${baseUrl}/data/pets?sortBy=_createdOn%20desc`);

    let result = await response.json();

    return result;
}

export async function create(petData) {
    let response = await fetch(`${baseUrl}/data/pets`, {
        method: 'post',
        headers: {
        'content-type': 'application/json',
        },
        body: JSON.stringify(petData)
    });

    let result = await response.json();
    return result;
}

export async function getOne(id) {
    let response = await fetch(`${baseUrl}/data/pets/${id}`);

    let result = await response.json();

    return result;
}