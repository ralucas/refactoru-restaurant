//Part I
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree){
	//String
	this.name = name;
	//Number
	this.calories = calories;
	//Boolean
	this.vegan = vegan;
	//Boolean
	this.glutenFree = glutenFree;
	//Boolean
	this.citrusFree = citrusFree;
}

	FoodItem.prototype.isVegan = function isVegan(){
		return this.vegan ? 'is a vegan item':'is not a vegan item';
	};

	FoodItem.prototype.isGlutenFree = function isGlutenFree(){
		return this.glutenFree ? 'is a gluten free item':'is not a gluten free item';
	};

	FoodItem.prototype.isCitrusFree = function isCitrusFree(){
		return this.citrusFree ? 'is a citrus free item':'is a citrus item';
	};

	FoodItem.prototype.toString = function toString(){
		console.log('The '+ this.name +' has '+ this.calories +' calories. It ' +this.isVegan()+ ', ' 
			+this.isGlutenFree()+ ', and ' +this.isCitrusFree()+'.');
	};

var carrot = new FoodItem('carrot', 50, true, true, true);
var cheeseburger = new FoodItem('cheeseburger', 500, false, false, true);
var orange = new FoodItem('orange', 30, true, true, true);

carrot.toString();
cheeseburger.toString();
orange.toString();

//Part II

var Drink = function(name, description, items, price){
	//strings
	this.name = name;
	this.description = description;
	this.items = items;
	//number
	this.price = price;
}

var Plate = function(name, description, items, price){
	//strings
	this.name = name;
	this.description = description;
	//string
	this.items = items;
	//number
	this.price = price;
}

var Order = function(plates){
	//array
	this.plates = plates;
}

var Menu = function(plates, drinks){
	//array
	this.plates = plates;
	this.drinks = drinks;
}

var Restaurant = function(name, description, menu){
	//strings
	this.name = name;
	this.description = description;
	//object
	this.menu = menu;
}

var Customer = function(dietaryPreference){
	//string
	this.dietaryPreference = dietaryPreference;
}

	Drink.prototype.toString = function (){
		console.log('The '+this.name+' drink, '+this.description+' and contains '+
			this.items.join(', ')+' and costs $'+this.price+'.');
	};

	Plate.prototype.toString = function (){
		console.log('The '+this.name+' plate, '+this.description+', includes '+
			this.items.join(', ')+' and costs $'+this.price+'.');
	};

	Order.prototype.toString = function (){
		console.log('The order consists of '+this.plates);
	};

	Menu.prototype.toString = function (){
		console.log('The Menu has the following awesome food plates of '
			+this.plates.name+' and drinks of '+this.drinks.name);
	};

	Restaurant.prototype.toString = function(){
		console.log(this.name+', '+this.description+', and the menu includes their '+
			'world famous '+this.menu.plates[0].name+' and '+this.menu.plates[1].name+
			' and the drink of '+this.menu.drinks.name);
	};

	Customer.prototype.toString = function (){
		console.log('The customer has a dietary preference of '+
			this.dietaryPreference);
	};

	Plate.prototype.isVegan = function (){
		var itemVegan = [];
		for(var i = 0; i < this.items.length; i++){
			itemVegan.push(this.items[i].vegan);
		}
		for(var j = 0; j < itemVegan.push; j++){
			if(itemVegan[j] === false){
				console.log(this.item + ' is not Vegan');
			}
			else{
				console.log(this.item + ' is Vegan');
			}
		}
	};

	Plate.prototype.isCitrusFree = function (){
		var itemCitrus = [];
		for(var i = 0; i < this.items.length; i++){
			itemCitrus.push(this.items[i].citrusFree);
		}
		for(var j = 0; j < itemCitrus.push; j++){
			if(itemCitrus[j] === false){
				console.log(this.item + ' is not citrus free');
			}
			else{
				console.log(this.item + ' is citrus free item');
			}
		}
	};

	Plate.prototype.isGlutenFree = function (){
		var itemGluten = [];
		for(var i = 0; i < this.items.length; i++){
			itemGluten.push(this.items[i].glutenFree);
		}
		for(var j = 0; j < itemGluten.push; j++){
			if(itemGluten[j] === false){
				console.log(this.item + ' is not gluten free');
			}
			else{
				console.log(this.item + ' is a gluten free item');
			}
		}
	};

	var burrito = new Plate('Super Burrito', 'a fabulous bean and beef burrito', 
		['tortilla', 'refried beans', 'ground beef', 'cheese'],	11.99);

	var guacamole = new Plate('Holy Guacamole', 'the best guac this side of the'+
		' Mississip', ['avocado', 'tomato', 'salsa', 'special spice'], 6.79);

	var margarita = new Drink("Margaret's Margarita", 'a tasty blend of tequila'+
		' and magarita', ['tequila', 'special margarita blend', 'ice', 'love'], 3.99);

	var octoberMenu = new Menu([burrito, guacamole], margarita);

	var newmexRest = new Restaurant("Rudy's All-Star Breakfast Buffet and New Mexican"+
		" Restaurant", "really tasty stuff...kinda...hey, just try us, no, seriously"+
		" if you don't my mom will be really upset", octoberMenu);

	newmexRest.toString();