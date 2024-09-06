//PUNTO 1
const API_URL = "https://jsonplaceholder.typicode.com/todos";


//PUNTO 2
$todosTbodyData = document.querySelector("#todosTbodyData");


//PUNTO 3
const state = {
    todos: [],
}


//PUNTO 4
const fetchDataTodos = async () => {
    try {
        const response = await fetch(API_URL, {
            method: "GET"
        });
        if (response.ok) {
            const result = await response.json();
            state.todos = result;
        } else {
            console.log("errore generico del server");
        }
    } catch (error) {
        console.log(error);
    }
}

//PUNTO 5
const generateHTMLFromDataTodos = () => {
    const HTMLArray = state.todos.map((todo) => {
        return `
        <tr>
            <td>${todo.id}</td>
            <td>${todo.userId}</td>
            <td>${todo.title}</td>
            <td>${todo.complite ? 'True' : 'False'}</td>
        </tr>
        `;
    });
    const HTML = HTMLArray.join("");
    return HTML;
}


//PUNTO 6
const renderDataTodos = () => {
    const HTML = generateHTMLFromDataTodos();
    $todosTbodyData.innerHTML = HTML;
}


//PUNTO 7
const init = async () => {
    await fetchDataTodos();
    renderDataTodos();
}


//PUNTO 8
init();

