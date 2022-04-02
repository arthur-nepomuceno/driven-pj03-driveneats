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
    const selectedMeal = document.querySelector(".meals > .selected");
    const mealName = selectedMeal.querySelector(".option-title p").innerHTML
    const mealPrice = selectedMeal.querySelector(".option-price p").innerHTML;

    const selectedDrink = document.querySelector(".drinks > .selected");
    const drinkName = selectedDrink.querySelector(".option-title p").innerHTML
    const drinkPrice = selectedDrink.querySelector(".option-price p").innerHTML

    const selectedDessert = document.querySelector(".desserts > .selected");
    const dessertName = selectedDessert.querySelector(".option-title p").innerHTML
    const dessertPrice = selectedDessert.querySelector(".option-price p").innerHTML

    const total = (Number(mealPrice.split(" ").pop().replace(",", ".")) 
    + Number(drinkPrice.split(" ").pop().replace(",", ".")) 
    + Number(dessertPrice.split(" ").pop().replace(",", "."))).toFixed(2) 



    alert(`Olá, gostaria de fazer o pedido:
    - Prato: ${mealName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}
    Total: R$ ${total}`);
}; 