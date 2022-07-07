const baseUrl = 'http://localhost:3030';

export async function login(email, password) {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    localStorage.setItem('user', email);

    return result;
}

export async function register(email, password) {
    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let result = await response.json();

    return result;
}

export function getUser() {
    return localStorage.getItem('user');
}