export const request = (url) => {

    return fetch(url).then(responseHandler);
};

async function responseHandler(res) {
    let jsonData = await res.json();

    if(!res.ok){
        throw Object.values(jsonData);
    }else {
        return jsonData;
    }
}