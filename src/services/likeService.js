import * as request from '../services/requester';

const baseUrl = 'http://localhost:3030';

export const like = (userId, petId) => {
    return request.post(`${baseUrl}/data/likes`, {userId, petId});
}

export async function getPetLikes(petId) {
    const query = encodeURIComponent(`petId="${petId}"`);

    return request.get(`${baseUrl}/data/likes?select=userId&where=${query}`)
    .then(res => {
        return res.map(x => x.userId);
    })
}