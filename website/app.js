const header = document.querySelector('#header');
function onClick() {
    let hd = header;
    if (hd.classList.contains('active')) {
        hd.classList.replace('active', 'inactive');
        console.log('One');
    } else {
        hd.classList.replace('inactive', 'active');
        console.log('Two');
    };
};

header.addEventListener('click', onClick, false);

const postData = async (url = '', data = {}) => {
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
postData(`http://localhost:${port}/data`, {name: 'Example'});