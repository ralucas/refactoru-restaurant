$(function(){

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
};

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
		return 'the '+ this.name +' has '+ this.calories +' calories and is '+this.isVegan()+', '+
			this.isGlutenFree()+', and '+this.isCitrusFree()+', ';
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
var dietaryPrefs = ['Vegan', 'Gluten Free', 'Citrus Free'];
//Part II

var Drink = function(name, description, items, price){
	//strings
	this.name = name;
	this.description = description;
	this.items = items;
	//number
	this.price = price;
};

var Plate = function(name, description, items, price){
	//strings
	this.name = name;
	this.description = description;
	//string
	this.items = items;
	//number
	this.price = price;
};

var Order = function(plates, drinks){
	//array
	this.plates = plates;
	this.drinks = drinks;
};

var Menu = function(plates, drinks){
	//array
	this.plates = plates;
	this.drinks = drinks;
};

var Restaurant = function(name, description, menu){
	//strings
	this.name = name;
	this.description = description;
	//object
	this.menu = menu;
};

var Customer = function(dietaryPreference){
	//string
	this.dietaryPreference = dietaryPreference;
};

	//Plate prototypes
	Plate.prototype.isVegan = function (){
		var itemVegan = [];
		var counter = 0;
		for(var i = 0; i < this.items.length; i++){
			itemVegan.push(this.items[i].vegan);
		}
		for(var j = 0; j < itemVegan.length; j++){
			if(itemVegan[j] === false){
				counter += 1;
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
				counter += 1;
			}
		}
		if(counter > 1){
			return 'Gluten free';
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
				counter += 1;
			}
		}
		if(counter > 1){
			return 'Citrus free';
		}
		else{
			return 'not citrus free';
		}
	};

	var loopStringer = function(arr){
		var str = '';
		for(var i = 0; i < arr.length; i++){
			str += arr[i].toString();
		}
		return str;
	};

	var loopCreate = function(arr){
		var str = '';
		for(var i = 0; i < arr.length; i++){
			str += arr[i].create();
		}
		return str;
	};

	var looper = function(arr){
		var str = '';
		for(var i = 0; i < arr.length; i++){
			str += arr[i]+',';
		}
		return str;
	};

	Plate.prototype.toString = function (){
		var str = loopStringer(this.items);
		console.log('The '+this.name+' plate, '+this.description+', is '+this.isGlutenFree()+
			', '+this.isVegan()+', '+this.isCitrusFree()+', includes '+
			str+'and costs $'+this.price+'.');
	};

	//toString prototypes
	Drink.prototype.toString = function (){
		console.log('The '+this.name+' drink, '+this.description+' and contains '+
			this.items.join(', ')+' and costs $'+this.price+'.');
	};

	Order.prototype.toString = function (){
		console.log('The order consists of '+this.plates);
	};

	Menu.prototype.toString = function (){
		console.log('The Menu has the following awesome food plates of '+
			loopStringer(this.plates)+' and drinks of '+loopStringer(this.drinks));
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

	FoodItem.prototype.create = function (){
		console.log(this.name);
		var closest = $('.items').closest();
		return $('<li class="fooditem">{name}</li>'.supplant(this)).appendTo(closest);
	};

	Drink.prototype.create = function (){
		for(var i = 0; i < this.items.length; i++){
			console.log(this.items[i]);
			this.items[i].create();
		}
		return $('<div class="drinks menuItem" ><h3 class="name">{name}</h3>'.supplant(this)+
			'<p class="price" data-price={price}>${price}</p>'.supplant(this)+
			'<p class="button">{description}</p><ul class="items"></ul>'.supplant(this)+
			'<button type="button" class="btn btn-default btn-xs order">Order</button></div>')
			.appendTo('.menu');
	};

	Plate.prototype.create = function (){
		for(var i = 0; i < this.items.length; i++){
			console.log(this.items[i]);
			this.items[i].create();
		}
		return $('<div class="plates menuItem" data-vegan="{0}" data-citrus="{1}" data-gluten="{2}">'.supplant([this.isVegan(), this.isCitrusFree(), this.isGlutenFree()])+
			'<h3 class="name">{name}</h3>'.supplant(this)+
			'<p class="price" data-price={price}>${price}</p>'.supplant(this)+
			'<p class="desc">{description}</p><ul class="items"></ul>'.supplant(this)+
			'<button type="button" class="btn btn-default btn-xs order">Order</button></div>')
			.appendTo('.menu');
	};

	Menu.prototype.create = function (){
		for(var i = 0; i < this.plates.length; i++){
			this.plates[i].create();
		}
		for(var i = 0; i < this.drinks.length; i++){
			this.drinks[i].create();
		}
	};

	Restaurant.prototype.create = function (){
		return $('<h1 class="restaurant">{name}</h1><p class="lead">{description}</p>'
			.supplant(this));
	};

	var createDietaryPrefs = function (arr){
		for(var i = 0; i < arr.length; i++){
			$('.diet-list').append('<li><input class="diet-check" type="checkbox"'+
				'value="{0}"><label for="{0}">{0}</label></li>'.supplant([arr[i]]));
		}
	};

	var totalP = (function(){
		var totalPrice = 0;
		var total = function total (price){
			totalPrice += price;
			return totalPrice;
		};

		var totalsub = function totalsub (price){
			totalPrice -= price;
			return totalPrice;
		}

		return {
			total : total,
			totalsub : totalsub
		}
	})();

	//menu items
	var burrito = new Plate('Super Burrito', 'a fabulous bean and beef burrito',
		[tortilla, refried_beans, ground_beef, cheese],	12);

	var guacamole = new Plate('Holy Guacamole', 'the best guac this side of the'+
		' Mississip', [avocado, tomato, salsa, special_spice], 7);

	var margarita = new Drink("Margaret's Margarita", 'a tasty blend of tequila'+
		' and magarita', [tequila, special_margarita_blend, ice, love], 5);

	var octoberMenu = new Menu([burrito, guacamole], [margarita]);

	var newmexRest = new Restaurant("rudy's all-star buffet", "a restaurant", octoberMenu);

	//element creation
	$('.head').append(newmexRest.create());
	octoberMenu.create();
	createDietaryPrefs(dietaryPrefs);

	$('.menu').on('click', '.order', function(){
		var itemName = $(this).closest('.menuItem').find('.name').text();
		var itemPrice = $(this).closest('.menuItem').find('.price').attr('data-price');
		var itemTotal = totalP.total(parseInt(itemPrice));
		$('#order').append('<p class="orderItem">'+itemName+' '+'<span class="orderPrice" data-itemPrice='+
			itemPrice+'>$'+itemPrice+'  </span><span>'+'<button type="button" class="btn btn-default btn-xs remove">'+
			'Remove</button></span></p>');
		$('#totalPrice').empty();
		$('#totalPrice').append('<span data-total='+itemTotal+'>$'+itemTotal+'</span>');
	});

	$('.cart').on('click', '.remove', function(){
		var orderItem = $(this).closest('.orderItem');
		var itemPrice = $(this).closest('.orderItem').find('.orderPrice').attr('data-itemPrice');
		var itemTotal = $(this).closest('.cart').find('#totalPrice span').attr('data-total');
		var newTotal = totalP.totalsub(parseInt(itemPrice));
		$('#totalPrice').empty();
		$('#totalPrice').append('<span data-total='+newTotal+'>$'+newTotal+'</span>');
		orderItem.remove();
	});

	$('.diet').on('click', '.diet-check', function(){
		var type = $('input:checked').val();
		console.log('check', type);
		$menuItem = $(this).closest('.container').find('.menuItem');
		$vegan = $(this).closest('.container').find('.menuItem').attr('data-vegan') === 'Vegan';
		$gluten = $(this).closest('.container').find('.menuItem').attr('data-gluten');
		$citrus = $(this).closest('.container').find('.menuItem').attr('data-citrus');
		console.log('mi', $menuItem);
		if((type === "Vegan") && ($menuItem.attr('data-vegan') === 'Vegan')){
			console.log($menuItem);
		}
	});

});