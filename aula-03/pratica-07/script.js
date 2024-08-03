const pizzas = ["Calabreza", "Frango com catupity", "Portuguesa", "Marguerita", "chocolate"];

const listaFor = document.getElementById("lista-pizzas-for");

for (let i = 0; i < pizzas.length; i++){
    const item = document.createElement("li");
    item.textContent = pizzas[i];
    listaFor.appendChild(item);
}

const listaForOf = document.getElementById("lista-pizzas-for-of");

for (const pizza of pizzas){
    const item = document.createElement("li");
    item.textContent = pizza;
    listaForOf.appendChild(item);
}

const listaWhile = document.getElementById("lista-pizzas-while");

let contador = 0;

while (contador < pizzas.length){
    const item = document.createElement("li");
    item.textContent = pizzas[contador];
    listaWhile.appendChild(item);
    contador++;
}