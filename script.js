function selectMeal(mealOption) {
    const selectedMeal = document.querySelector(".meals > .selected");
    if (selectedMeal !== null) {
        mealOption.classList.add("selected");
        selectedMeal.classList.remove("selected");
    } else {
        mealOption.classList.add("selected");
    }
    releaseOrderButton();
}

/*
==========================================================================
==========================================================================
*/

function selectDrink(drinkOption) {
    const selectedDrink = document.querySelector(".drinks > .selected");
    if (selectedDrink !== null) {
        drinkOption.classList.add("selected");
        selectedDrink.classList.remove("selected");
    } else {
        drinkOption.classList.add("selected");
    }
    releaseOrderButton();
}

/*
==========================================================================
==========================================================================
*/

function selectDessert(dessertOption) {
    const selectedDessert = document.querySelector(".desserts > .selected");
    if (selectedDessert !== null) {
        dessertOption.classList.add("selected");
        selectedDessert.classList.remove("selected");
    } else {
        dessertOption.classList.add("selected");
    }
    releaseOrderButton();
}

/*
==========================================================================
==========================================================================
*/

/*
AGORA O QUE EU QUERO É CRIAR UMA FUNÇÃO QUE MUDE O BOTÃO
DE FINALIZAR O PEDIDO, MAS SÓ QUANDO AS 3 OPÇÕES ESTIVEREM SELECIONADAS.

SOLUÇÃO (QUE NÃO GOSTEI MUITO, MAS QUE TÁ FUNCIONANDO):
CHAMAR A FUNÇÃO DE HABILITAR/DESABILITAR BOTÃO DENTRO DAS FUNÇÕES
DOS PEDIDOS.
*/


function releaseOrderButton() {
    const orderButton =  document.querySelector(".order-button");

    orderButton.classList.add("release"); 
    orderButton.innerHTML = `<p>Fechar pedido</p>`;
    orderButton.disabled = false;

    const selectedMeal = document.querySelector(".meals > .selected");
    const selectedDrink = document.querySelector(".drinks > .selected");
    const selectedDessert = document.querySelector(".desserts > .selected");

    if (selectedMeal === null || selectedDrink === null || selectedDessert === null) {
        orderButton.classList.remove("release");   
        orderButton.innerHTML = `<p>Selecione os 3 itens<br>para fechar o pedido</p>`;
        orderButton.disabled = true;
    }
}


function finishOrder() {

    //Getting the informations from the menu
    const selectedMeal = document.querySelector(".meals > .selected");
    const mealName = selectedMeal.querySelector(".option-title p").innerHTML
    const mealPrice = selectedMeal.querySelector(".option-price p").innerHTML;

    const selectedDrink = document.querySelector(".drinks > .selected");
    const drinkName = selectedDrink.querySelector(".option-title p").innerHTML
    const drinkPrice = selectedDrink.querySelector(".option-price p").innerHTML

    const selectedDessert = document.querySelector(".desserts > .selected");
    const dessertName = selectedDessert.querySelector(".option-title p").innerHTML
    const dessertPrice = selectedDessert.querySelector(".option-price p").innerHTML

    //Calculating the total cost of the order
    const total = (Number(mealPrice.split(" ").pop().replace(",", ".")) 
    + Number(drinkPrice.split(" ").pop().replace(",", ".")) 
    + Number(dessertPrice.split(" ").pop().replace(",", "."))).toFixed(2);

    //Asking for user's name and address
    const name = prompt("Por favor, digite o nome de quem irá receber o pedido:");
    const address = prompt("Por favor, digite o endereço de entrega:");

    //Inserting the infos on the confirm order screen
    document.querySelector(".meal #name").innerHTML = mealName;
    document.querySelector(".meal #price").innerHTML = mealPrice;
    document.querySelector(".drink #name").innerHTML = drinkName;
    document.querySelector(".drink #price").innerHTML = drinkPrice;
    document.querySelector(".dessert #name").innerHTML = dessertName;
    document.querySelector(".dessert #price").innerHTML = dessertPrice;
    document.querySelector(".total-price #price").innerHTML = `R$ ${total.replace(".", ",")}`;
    document.querySelector(".user-data #name").innerHTML = `Nome: ${name}`;
    document.querySelector(".user-data #address").innerHTML = `Endereço: ${address}`;
    

    //Building the message to be sent on whatsapp
    /*const message =
    `Olá, gostaria de fazer o pedido:\n
- Prato: ${mealName}
- Bebida: ${drinkName}
- Sobremesa: ${dessertName}\n
Total: R$ ${total}\n
Nome: ${name}
Endereço: ${address}`;

    const uriMessage = encodeURIComponent(message);*/

    document.querySelector(".cover").setAttribute("style", "display: initial");
    document.querySelector(".confirm-order").setAttribute("style", "display: initial");

    //window.open(`https://wa.me/5521982235702?text=${uriMessage}`);
};

function confirmOrder() {
    
}