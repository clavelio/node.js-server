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