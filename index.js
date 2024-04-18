const form = document.querySelector('form');

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    list.innerHTML = `<li>${item.value}</li>`
    console.log(item.value);
});