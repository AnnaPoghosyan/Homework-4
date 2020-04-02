const vendingMachine = {
    drinks: [
        {
            name: 'Coffee',
            price: 100,
            quantity: 5,
            code: "A0",
        },
        {
            name: 'Tea',
            price: 50,
            quantity: 0,
            code:"A1",
        },
        {
            name: 'Juice',
            price: 200,
            quantity: 10,
            code:"A2",
        },
    ],
    snacks: [
        {
            name: 'Chips',
            price: 150,
            quantity: 4,
            code: "B0",
        },
        {
            name: 'Snickers',
            price: 500,
            quantity: 1,
            code:"B1",
        },
        {
            name: 'Popcorn',
            price: 250,
            quantity: 0,
            code:"B2",
        },

    ]
};
let action = prompt("Please select the action. 1.Buy item, 2.Add item");
if (action === "1") {
    let selectCategory = prompt("Please choose 1.Drinks, 2.Snacks");
    if (selectCategory === "1") {
        let drinkType = prompt(getDrinksList(vendingMachine));
        let money = +prompt("Enter money");
        let selectedDrink;
    for(let i=0;i<vendingMachine.drinks.length;i++) {
    if (vendingMachine.drinks[i].code === drinkType) {
        selectedDrink = vendingMachine.drinks[i];
        break;
    }
    }
    if (selectedDrink.quantity <= 0) {
    alert(`There is no ${selectedDrink.name}`);
    } else {
    alert(`Take your ${selectedDrink.name} and your cash ${money - selectedDrink.price}`);
    }
    } else if (selectCategory === "2") {
        let snackType = prompt(getSnacksList(vendingMachine));
        let money = +prompt("Enter Money");
        let selectedSnack;
    for(let i=0;i<vendingMachine.snacks.length;i++) {
    if (vendingMachine.snacks[i].code === snackType) {
        selectedSnack = vendingMachine.snacks[i];
        break;
    }
    }
    if (selectedSnack.quantity <= 0) {
    alert(`There is no ${selectedSnack.name}`);
    } else {
    alert(`Take your ${selectedSnack.name} and your cash ${money - selectedSnack.price}`);

    }
    } else {prompt("Please choose item")}
} else if (action === "2") {
    let addItem = prompt("1.Add drink, 2.Add snack");
    if (addItem === "1") { 
        let drinkType = prompt(getDrinksList(vendingMachine));
        let newQuantity = +prompt("Enter how much you want to add");
        let selectedDrink;
    for(let i=0;i<vendingMachine.drinks.length;i++) {
    if (vendingMachine.drinks[i].code === drinkType) {
        selectedDrink = vendingMachine.drinks[i].quantity + newQuantity;
        break;
    }
    alert (`New quantity of ${vendingMachine.drinks[i].name} is ${selectedDrink}`) //alerts chi ashxatum
}

    } else if (addItem === "2") {
        let snackType = prompt(getSnacksList(vendingMachine));
        let newQuantity = +prompt("Enter how much you want to add");
        let selectedSnack;
    for(let i=0;i<vendingMachine.drinks.length;i++) {
    if (vendingMachine.snacks[i].code === snackType) {
        selectedSnack = vendingMachine.snacks[i].quantity + newQuantity;
        break;
    }
    }
    alert (`New quantity of ${vendingMachine.snacks[i].name} is ${selectedsnack}`);
    }
} else {alert("Please choose")}     //else chi ashxatum

function getDrinksList(vendingMachine) {        // drinks u snacks miavorel chstacvec vor amen meki hamar arandzin chgrem
    let alertString = '';
    for (let i=0; i< vendingMachine.drinks.length; i++) {
        alertString += vendingMachine.drinks[i].name + " " + vendingMachine.drinks[i].code + " " + vendingMachine.drinks[i].price + " "
    }
    return alertString;
}

function getSnacksList(vendingMachine) {
    let alertString = '';
    for (let i=0; i< vendingMachine.snacks.length; i++) {
        alertString += vendingMachine.snacks[i].name + " " + vendingMachine.snacks[i].code + " " + vendingMachine.snacks[i].price + " ";
    }
    return alertString;
}



