// guyn poxel
// document.getElementsByClassName('main-title')[0].style.color = 'red';
//click aneluc asxatacnel

document.getElementById("main-action-button").onclick = function () {
    // alert(1);
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}


//   кнопка Смотреть меню
let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

// /   кнопка Заказать
let buttons = document.getElementsByClassName("product-button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

// /кнопка Оформить заказ

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");

document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if(!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if(!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
}

//$ codes

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if(currentCurrency === "$") {
        newCurrency = "₽";
        coefficient = 7;
    } else if ( currentCurrency === "₽") {
        newCurrency = "AMD";
        coefficient = 380;
    } else if ( currentCurrency === "AMD") {
        newCurrency = "€";
        coefficient = 8;
    } else if ( currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 50;
    }
    e.target.innerText = newCurrency;

    for(let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }


}