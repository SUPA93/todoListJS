// Add class for H1 animation on load
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('h1');
    header.classList.add('animate-text');
});

const form = document.querySelector('form');
const item = document.getElementById('item');
const shareIcon = document.getElementById('share-icon');
const shareDialog = document.getElementById('share-dialog');
const shareWhatsapp = document.getElementById('share-whatsapp');
const shareEmail = document.getElementById('share-email');
const shareSms = document.getElementById('share-sms');
const shareTwitter = document.getElementById('share-twitter');
const shareFacebook = document.getElementById('share-facebook');
const cancelShare = document.getElementById('cancel-share');
const copyLink = document.getElementById('copy-link');
const shareLink = document.getElementById('share-link');

// Show or hide Share Icon Function
function toggleShareIcon() {
    const items = list.getElementsByTagName('li');
    if (items.length > 1) {
        shareIcon.style.display = 'block';
    } else {
        shareIcon.style.display = 'none';
    }
}

//storage part
function storeList() {
    window.localStorage.todoList = list.innerHTML;
}

// Get TODOS function
function getTodos() {
    if (window.localStorage.todoList) {
        list.innerHTML = window.localStorage.todoList;

    } else {
        list.innerHTML = `<li>Cliquez sur un Todo pour le supprimer</li>`
    }
    toggleShareIcon();
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
function addDate() {
    let now = new Date();
    return now.toLocaleString();
}

//Two ways to call function getTodos()
window.addEventListener('load', getTodos);
//getTodos();

// Fonction pour capitaliser la première lettre de la chaîne
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// Add element
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let formattedDate = addDate();
    let capitalizedItem = capitalizeFirstLetter(item.value); // Capitaliser la première lettre
    list.innerHTML += `<li>${capitalizedItem} -Ajouté le ${formattedDate}</li>`;
    item.value = "";
    storeList();
    toggleShareIcon();
});

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("checked")) {
        e.target.remove();
    } else {
        e.target.classList.add("checked");
    }
    storeList();
    toggleShareIcon();
});

// Toggle share icon based on the number of items in the list
function toggleShareIcon() {
    const items = list.getElementsByTagName('li');
    if (items.length > 1) {
        shareIcon.style.display = 'block';
    } else {
        shareIcon.style.display = 'none';
    }
}

// Show share dialog
shareIcon.addEventListener('click', () => {
    const items = list.getElementsByTagName('li');
    let listContent = '';
    let listIndex = 0;
    for (let item of items) {
        listIndex += 1;
        listContent += `${listIndex} ${item.textContent}\n`;
    }

    const encodedListContent = encodeURIComponent(listContent);

    shareWhatsapp.href = `https://wa.me/?text=${encodedListContent}`;
    shareEmail.href = `mailto:?subject=Ma%20TO%20DO%20LIST&body=${encodedListContent}`;
    shareSms.href = `sms:?body=${encodedListContent}`;

    shareDialog.style.display = 'flex';
});

cancelShare.addEventListener('click', () => {
    shareDialog.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == shareDialog) {
        shareDialog.style.display = 'none';
    }
});

// Copy link to clipboard
copyLink.addEventListener('click', () => {
    shareLink.select();
    document.execCommand("copy");
    alert("Lien copié dans le presse-papiers !");
});