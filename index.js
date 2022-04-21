// Write your code here

class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}

// let bigFluffyDog1 = new Dog("Buzz", "greatPyrenes");
// let bigFluffyDog2 = new Dog("Woody", "labrador");

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

class Dinner {
    #dessert;
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

let kevinsBreakfast = new Breakfast ("peanut butter toast", "coffee");
console.log("this is what I eat for breakfast", kevinsBreakfast);
