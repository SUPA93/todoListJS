const form = document.querySelector('form');

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
//Two ways to call function getTodos()
window.addEventListener('load', getTodos);
//getTodos();

// add element
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`
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


