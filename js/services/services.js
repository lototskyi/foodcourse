const postData = async (url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

function getConnectionData() {
    let host = location.host + ':3000';
    const protocol = location.protocol;

    if (host != 'localhost:3000') {
        host = 'json.homeapp.pp.ua';
    }

    return {host, protocol};
}

export {postData, getResource, getConnectionData};