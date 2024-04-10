var struct = document.querySelectorAll("input[name='struct']");
var b_Add = document.querySelector(".Add");
var b_remove = document.querySelector(".Remover");
var b_clear = document.querySelector(".Clean");
var box = document.querySelector(".caxa");
var showDiv = document.querySelector(".show");
var vetor = [];

function add() {
    var type = document.querySelector("input[name='struct']:checked").value;
    if (type === "pilha") {
        vetor.push(box.value);
    } 
    if (type ==="fila"){
        vetor.unshift(box.value);// pode ser push tb
    }
    att_Vetor();
}

function remove(){
    var type = document.querySelector("input[name='struct']:checked").value;
    if (type === "pilha") {
        vetor.pop();
    } 
    if(type ==="fila") {
        vetor.shift();
    }
    att_Vetor();
}

function clear(){
    vetor = []
    att_Vetor();
}

function att_Vetor() {
        document.querySelector(".show span").innerText = vetor;
}

struct.forEach(function(radio){
    radio.addEventListener("change",() => {clear()})
});

b_Add.addEventListener("click",() => {add()});
b_remove.addEventListener("click",() => {remove()});
b_clear.addEventListener("click",() => {clear()});
