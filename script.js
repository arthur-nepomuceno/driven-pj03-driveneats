function selectMeal(mealOption) {
    let selectedMeal = document.querySelector(".meals > .selected");
    if (selectedMeal !== null) {
        mealOption.classList.add("selected");
        selectedMeal.classList.remove("selected");
    } else {
        mealOption.classList.add("selected");
    }

    /*let selectedMeal = document.querySelector(".meals > .selected")
    if (selectedMeal !== null) {
        selectedMeal.classList.remove("selected")
    }
    mealOption.classList.add("selected");*/
}

/*
==========================================================================
==========================================================================
*/

function selectDrink(drinkOption) {
    let selectedDrink = document.querySelector(".drinks > .selected");
    if (selectedDrink !== null) {
        drinkOption.classList.add("selected");
        selectedDrink.classList.remove("selected");
    } else {
        drinkOption.classList.add("selected");
    }
}

/*
==========================================================================
==========================================================================
*/

function selectDessert(dessertOption) {
    let selectedDessert = document.querySelector(".desserts > .selected");
    if (selectedDessert !== null) {
        dessertOption.classList.add("selected");
        selectedDessert.classList.remove("selected");
    } else {
        dessertOption.classList.add("selected");
    }
}

/*
==========================================================================
==========================================================================
*/

/*
AGORA O QUE EU QUERO É CRIAR UMA FUNÇÃO QUE MUDE O BOTÃO
DE FINALIZAR O PEDIDO, MAS SÓ QUANDO AS 3 OPÇÕES ESTIVEREM SELECIONADAS.
*/