Objective for functions
=======================
Define several constructors.

Resources
-----------
* [Introduction to Object-Oriented JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
* [3 ways to define a JavaScript class](http://www.phpied.com/3-ways-to-define-a-javascript-class/)
* [Eloquent Javascript Ch8 - Object-Oriented Programming](http://eloquentjavascript.net/chapter8.html)

Requirements
------------
#Part I

1.Define constructors for the following object. Add parameters to the constructor for the given properties and add them as instance variables.
* FoodItem
  * string name
  * Number calories
  * boolean vegan
  * boolean glutenFree
  * boolean citrusFree
2. Define a toString method on the constructor's prototype. It should return a string description of the food including its name, calories, and dietary information, formatted as you choose. toString should not have any side effects.
3. Instantiate three different FoodItems and store each in a separate variable. Call toString on each instance and print the result to the console.

#Part II

1. Define constructors for the following objects. Add parameters to the constructor for the given properties and add them as instance variables.
* Drink
  * string name
  * string description
  * Number price
  * Array of FoodItem ingredients
* Plate
  * string name
  * string description
  * Number price
  * Array of FoodItem ingredients
* Order
  * Array of Plate plates
* Menu
  * Array of Plate plates
* Restaurant
  * string name
  * string description
* Menu menu
* Customer
  * string dietaryPreference
2. Define a toString method on each constructor's prototype. This method should return a string representation of the object, formatted as you choose. toString should not have any side effects. You may want to reuse the toString method of the contained objects. (e.g. the Menu object should call toString on each of its plates to reuse that functionality instead of having to duplicate the code for each plate).
3. Add the following methods to the Plate object to determine if all the food items within it fit a specific dietary restriction.
  * boolean isVegan
  * boolean isGlutenFree
  * boolean isCitrusFree
4. Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
5. Instantiate a Menu that contains each of the instantiated Plates and Drinks.
6. Instantiate a Restaurant that contains the instantiated Menu.
7. Call the Restaurant's toString method to have it print out all its information.


Objective for UI
================
Create a user interface for the Restaurant Objects exercise. Display a restaurant's menu and allow users to place orders.

Requirements
-------------
1. Add a create method to each object. This create method should return a DOM element for that object, i.e.
```
return $('<div class="food-item">{name}</div>'.supplant(myFoodItem));
```
2. These create methods should all be pure functions. For code reuse, you can call create methods of contained objects, just like toString was used in the previous exercise.
3. When the page loads, render a restaurant with its name and menu.
4. When the user clicks on a plate, they get the option to add it to their order.
5. Display the user's order with total price.
6. Highlight the Plates that match the user's dietary preferences.
Note: It might be a good idea to write down your design ahead of time and run it by a peer or instructor to see if it makes sound sense before beginning to implement it! Good luck and have fun!

Bonus
------
Add your own unique customization to this exercise, such as an enhanced user interface, additional ordering options, or an expanded menu.
