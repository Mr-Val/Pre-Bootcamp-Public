function changeImage(pizza) {
    pizza.src = "images/TMNT2 - Copy.jpg";
}

function changeImageBack(unicorn) {
    unicorn.src = "images/TMNT1 - Copy.jpg";
}


function like(element) {
    document.querySelector(element).innerText++;
}

function remove(element) {
    element.remove()
}

function myAlert() {
    alert("5 seconds have passed")
}

function time() {
    setTimeout(myAlert, 5000);
}

function changeColor(element) {
    element.style.color = "red";
}