/*const postData = async (url = '', data = {}) => {
    const res = await fetch (url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

postData(`http://localhost:${port}/data`, {name: 'Claudio'});
postData(`http://localhost:${port}/data`, {name: 'Example'}); */