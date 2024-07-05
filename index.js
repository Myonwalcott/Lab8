function fetchGif() {
    const url = 'https://nekos.best/api/v2/neko';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayGif(data.url);
        })
        .catch(error => {
            console.error('Error fetching GIF:', error);
        });
}

function displayGif(url) {
    const infoElement = document.getElementById('info');
    infoElement.innerHTML = `<img src="${url}" alt="Neko GIF" class="gif">`;
}
