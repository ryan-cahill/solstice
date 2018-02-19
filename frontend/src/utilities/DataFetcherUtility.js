export function fetchInitialData() {
    return fetch('http://0.0.0.0:3001/utilityData', {method: 'get'})
        .then(response => response.json());
}

export function getBillingDetailsByUuid(uuid) {
    return fetch('http://0.0.0.0:3001/utilityData/' + uuid, {method: 'get'})
        .then(response => response.json());
}

export function updateUtilityDetailsByUuid(uuid, body) {
    return fetch('http://0.0.0.0:3001/updateUtilityData/' + uuid, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
}