const { calculateTotalPrice } = require("./utils");

// Exemple de données d'entrée
const inputBasket = `Back to the Future 1
Back to the Future 2
Back to the Future 3`;

const totalPrice = calculateTotalPrice(inputBasket);
console.log(`Total Price: ${totalPrice} €`);
