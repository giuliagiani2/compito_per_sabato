//1. Creo e salvo le costanti (statiche) es. il link dell'API da chiamare;
URL_API = "https://jsonplaceholder.typicode.com/albums";


//2. Seleziono gli elementi HTML con i quali devo lavorare;
const $albumsTbodyData = document.querySelector("#albumsTbodyData");


//3. Dichiaro la base dati `state`;
const state = {
    albums: []
};


//4. Dichiaro una funzione per ottenere i dati dal server per salvarli all'interno dello `state`;
const fetchDataAlbums = async () => {
    try {
        const response = await fetch(URL_API, {
            method: "GET"
        });
        if (response.ok) {
            const result = await response.json();
            state.albums = result;
        } else {
            console.log("Generato errore");
        }
    } catch (error) {
        console.log(error);
    }
}


//5. Dichiaro una funzione per manipolare i dati se necessario;
const generateHTMLFromDataAlbums = () => {
    const HTMLArray = state.albums.map((album) => {
        return `
    <tr>
    <td>${album.id}</td>
    <td>${album.userId}</td>
    <td>${album.title}</td>
    </tr>
    `;
    });
    const HTML = HTMLArray.join("");
    return HTML;
}


//6. Dichiaro una funzione per renderizzare l'HTML;
const renderDataAlbums = () => {
    const HTML = generateHTMLFromDataAlbums();
    $albumsTbodyData.innerHTML = HTML;
}


//7. Dichiaro una funzione per inizializzare che mi permette di eseguire le operazioni nell'ordine corretto;
const initAlbums = async () => {
    await fetchDataAlbums();
    renderDataAlbums();
}


//8. Eseguo la funzione di inizializzazione `init`;
initAlbums();