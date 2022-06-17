const baseUrl = 'http://localhost:3030';

export async function getAll() {
    let response = await fetch(`${baseUrl}/data/pets?sortBy=_createdOn%20desc`);

    let result = await response.json();

    return result;
}