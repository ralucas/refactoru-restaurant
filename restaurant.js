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
var tortilla = new FoodItem('tortilla', 40, true, false, true);
var refried_beans = new FoodItem('refried beans', 100, true, true, true);
var cheese = new FoodItem('cheese', 150, false, true, true);
var ground_beef = new FoodItem('ground beef', 300, false, true, true); 
var avocado = new FoodItem('avocado', 200, true, true, true);
var tomato = new FoodItem('tomato', 100, true, true, true);
var salsa = new FoodItem('salsa', 300, true, true, true);
var special_spice = new FoodItem('special sauce', 200, true, true, true);
var tequila = new FoodItem('tequila', 100, true, true, true);
var special_margarita_blend = new FoodItem('special margarita blend', 200, true, true, false);
var ice = new FoodItem('ice', 0, true, true, true);
var love = new FoodItem('love', 0, true, true, true);

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

	//is... prototypes
	Plate.prototype.isVegan = function (){
		var itemVegan = [];
		var counter = 0;
		for(var i = 0; i < this.items.length; i++){
			itemVegan.push(this.items[i].vegan);
		}
		for(var j = 0; j < itemVegan.length; j++){
			if(itemVegan[j] === false){
				counter += 1
			}
		}
		if(counter > 1){
			return 'Vegan';
		}
		else{
			return 'not Vegan';
		}
	};

	Plate.prototype.isCitrusFree = function (){
		var itemCitrus = [];
		var counter = 0;
		for(var i = 0; i < this.items.length; i++){
			itemCitrus.push(this.items[i].citrusFree);
		}
		for(var j = 0; j < itemCitrus.length; j++){
			if(itemCitrus[j] === false){
				counter += 1
			}
		}
		if(counter > 1){
			return 'gluten free';
		}
		else{
			return 'not gluten free';
		}
	};

	Plate.prototype.isGlutenFree = function (){
		var itemGluten = [];
		var counter = 0;
		for(var i = 0; i < this.items.length; i++){
			itemGluten.push(this.items[i].glutenFree);
		}
		for(var j = 0; j < itemGluten.length; j++){
			if(itemGluten[j] === false){
				counter += 1
			}
		}
		if(counter > 1){
			return 'citrus free';
		}
		else{
			return 'not citrus free';
		}
	};

	//toString prototypes
	Drink.prototype.toString = function (){
		console.log('The '+this.name+' drink, '+this.description+' and contains '+
			this.items.join(', ')+' and costs $'+this.price+'.');
	};

	Plate.prototype.toString = function (){
		console.log('The '+this.name+' plate, '+this.description+', includes '+
			this.items.join(', ')+' and '+this.items.isVegan+' '+this.items.isGlutenFree+' '+
			this.items.isCitrusFree+' and costs $'+this.price+'.');
	};

	Order.prototype.toString = function (){
		console.log('The order consists of '+this.plates);
	};

	Menu.prototype.toString = function (){
		console.log('The Menu has the following awesome food plates of '
			+this.plates.name+' and drinks of '+this.drinks.name);
	};

	Restaurant.prototype.toString = function(){
		var plateString = '';
		for(var i = 0; i < this.menu.plates.length; i++){
			plateString += this.menu.plates[i].name+', which is '+this.menu.plates[i].isVegan()+
			' and '+this.menu.plates[i].isGlutenFree()+' and '+
				this.menu.plates[i].isCitrusFree()+'. ';
		}
		console.log(this.name+', '+this.description+', and the menu includes our '+
			'world famous '+plateString+' And the alcoholic beverage of '+this.menu.drinks.name+'.');
	};

	Customer.prototype.toString = function (){
		console.log('The customer has a dietary preference of '+
			this.dietaryPreference);
	};

	//menu items
	var burrito = new Plate('Super Burrito', 'a fabulous bean and beef burrito', 
		[tortilla, refried_beans, ground_beef, cheese],	11.99);

	var guacamole = new Plate('Holy Guacamole', 'the best guac this side of the'+
		' Mississip', [avocado, tomato, salsa, special_spice], 6.79);

	var margarita = new Drink("Margaret's Margarita", 'a tasty blend of tequila'+
		' and magarita', [tequila, special_margarita_blend, ice, love], 3.99);

	var octoberMenu = new Menu([burrito, guacamole], margarita);

	var newmexRest = new Restaurant("Rudy's All-Star Breakfast Buffet and New Mexican"+
		" Restaurant", "really tasty stuff...kinda...hey, just try us, no, seriously"+
		" if you don't my mom will be really upset", octoberMenu);

	newmexRest.toString();