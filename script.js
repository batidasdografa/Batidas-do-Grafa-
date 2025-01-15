
// Função para tocar música (simulada)
function playMusic(musicId) {
    const playsKey = `plays-${musicId}`;
 let playCount = localStorage.getItem(playsKey) || 0;
    playCount++;
    localStorage.setItem(playsKey, playCount);
    document.getElementById(`plays-{musicId}`).innerText = playCount;
}

// Função para baixar música (simulada)
function downloadMusic(musicId) {
    const downloadsKey = `downloads-musicId`;
    let downloadCount = localStorage.getItem(downloadsKey) || 0;
    downloadCount++;
    localStorage.setItem(downloadsKey, downloadCount);
    document.getElementById(`downloads-{musicId}`).innerText = downloadCount;
}

// Função de pesquisa de músicas
function searchMusic() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const musicItems = document.querySelectorAll('.music-item');

    musicItems.forEach(item => {
        const musicTitle = item.querySelector('h3').innerText.toLowerCase();
        if (musicTitle.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function capitalizeFirstLetter() {
    const nameInput = document.getElementById('name');
    let value = nameInput.value;

    if (value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        nameInput.value = value;
    }
}

// Tela de login
function login() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
 alert(`Bem-vindo, ${name}! Acesse o PayPal: kimfrancisco997@gmail.com ou faça a transferência para o IBAN: 0006 0000 13322298301 29  para publicar sua música.`);
        document.getElementById('login').style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

// Exibir tela de login
document.getElementById('loginLink').addEventListener('click', function () {
    document.getElementById('login').style.display = 'flex';
});


