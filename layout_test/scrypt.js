var add = document.querySelector(".add");
var dell = document.querySelector(".dell");
var list = document.querySelector("#list");

function Task() {
    var el = document.createElement('li');
    el.setAttribute("class", "item")
    el.innerHTML = "<b>Создание сайтов<br>Создание сайтов<br>Создание сайтов<br>Создание сайтов<br>Создание сайтов<br>Создание сайтов<br>Создание сайтов</b>";
    list.appendChild(el);
    console.log(el)
};
add.addEventListener("click", function(e) {
    new Task();
});

dell.addEventListener("click", function() {
    var el = document.querySelector(".item");
   
    el.remove();
})