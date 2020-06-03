// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
        glutenFree: true,
        organic: false,
		price: 1.99
    },
    {
		name: "carrote",
		vegetarian: true,
        glutenFree: false,
        organic: true,
		price: 6.99
	},
    {
		name: "Soja",
		vegetarian: true,
        glutenFree: true,
        organic: true,
		price: 4.20
    },
    {
		name: "Quinoa",
		vegetarian: true,
        glutenFree: true,
        organic: true,
		price: 5.20
    },
    {
		name: "pates",
		vegetarian: true,
        glutenFree: false,
        organic: false,
		price: 1.70
    },
    {
		name: "farine de ble",
		vegetarian: true,
        glutenFree: false,
        organic: false,
		price: 4.99
    },
    {
		name: "Poulet",
		vegetarian: false,
        glutenFree: true,
        organic: false,
		price: 10.99
	},
	{
		name: "bread",
		vegetarian: true,
        glutenFree: false,
        organic: false,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
        glutenFree: true,
        organic: false,
		price: 10.00
    },
    {
		name: "Pomme de terre",
		vegetarian: true,
        glutenFree: true,
        organic: true,
		price: 5.80
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

 function restrictListProducts(prods, cp) {

	let resultProducts = products.slice(0);	

	if (cp.vegetarian) {
		resultProducts = resultProducts.filter(product => product.vegetarian);
	}
	if (cp.gluten) {
		resultProducts = resultProducts.filter(product => product.glutenFree);
	}
	if (cp.organic) {
		resultProducts = resultProducts.filter(product => product.organic);
	}

	return resultProducts;
}



// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}