//1
URL_API = "https://jsonplaceholder.typicode.com/comments";

//2
const $commentsTbodyData = document.querySelector("#commentsTbodyData");

//3
const state = {
    comments: []
}

//4
const fetchDataComments = async () => {
    try {
        const response = await fetch(URL_API, {
            method: "GET"
        });
        if (response.ok) {
            const result = await response.json();
            state.comments = result;
        } else {
            console.log("Generato errore");
        }
    } catch (error) {
        console.log(error);
    }
}

//5
const generateHTMLFromDataComments = () => {
    const HTMLArray = state.comments.map((com) => {
        return `
        <tr>
            <td>${com.id}</td>
            <td>${com.userId}</td>
            <td>${com.name}</td>
            <td>${com.email}</td>
            <td>${com.body}</td>
        </tr>
        `;
    });
    const HTML = HTMLArray.join("");
    return HTML;
}
/*
const generateHTMLFromDataComments=()=>{
    const HTMLArray=state.comments.map((comment)=>{
        return `
        <tr>
        <td>${comment.id}</td>
        <td>${comment.userId}</td>
        <td>${comment.name}</td>
        <td>${comment.email}</td>
        <td>${comment.body}</td>
        </tr>
        `;
    });
    const HTML=HTMLArray.join("");
    return HTML;
}*/

//6
const renderDataComments = () => {
    const HTML = generateHTMLFromDataComments();
    $commentsTbodyData.innerHTML = HTML;
}

//7
const init = async () => {
    await fetchDataComments();
    renderDataComments();
}

//8
init();