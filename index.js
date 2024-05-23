// Add class for H1 animation on load
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.classList.add('animate-text');
});

const form = document.querySelector('form');
const item = document.getElementById('item');

//storage part
function storeList(){
    window.localStorage.todoList = list.innerHTML;
}
function getTodos(){
    if (window.localStorage.todoList){
        list.innerHTML = window.localStorage.todoList;
        
    }else {
        list.innerHTML = `<li>Cliquez sur un Todo pour le supprimer</li>`
    }
}
// Change placeholder on mouseenter
item.addEventListener('mouseenter', () => {
    item.placeholder = '...';
});
// Restore placeholder 
item.addEventListener('mouseleave', () => {
    item.placeholder = 'À faire';
});
// Add date for each TODOS
function addDate(){
    let now = new Date();
    return now.toLocaleString();
}
//Two ways to call function getTodos()
window.addEventListener('load', getTodos);
//getTodos();

// add element
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formattedDate = addDate();
    list.innerHTML += `<li>${item.value} - le ${formattedDate}</li>`;
    item.value = "";
    storeList();
});


list.addEventListener("click", (e) => {
    if(e.target.classList.contains("checked")){
        e.target.remove();
    }else{
        e.target.classList.add("checked");
    }
    storeList();
});


