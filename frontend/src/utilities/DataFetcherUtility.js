const apiPort = 5001;

export function fetchInitialData() {
    return fetch('http://0.0.0.0:' + apiPort + '/utilityData', {method: 'get'})
        .then(response => response.json());
}

export function getBillingDetailsByUuid(uuid) {
    return fetch('http://0.0.0.0:' + apiPort + '/utilityData/' + uuid, {method: 'get'})
        .then(response => response.json());
}

export function updateUtilityDetailsByUuid(uuid, body) {
    return fetch('http://0.0.0.0:' + apiPort + '/updateUtilityData/' + uuid, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
}