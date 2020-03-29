## The story
You work for a restaurant which needs to have implemented an interactive menu. The menu consists of items which are made out of ingredients. Some of the customers happen to be allergic to some of the ingredients. They need to be aware that the food
they want to order may contain allergens. 

## The task
Build the ingredients menu interface. 

For each ingredient we know the name and sub-ingredients which it is consisted of. On user’s input, you need to list all the menu items which contain the given allergen. On click of the item, represent the correct data structure which makes the given item and highlight the given allergen.

#### For example:
The menu has 3 items.
1. Bacon & eggs
    1. Bacon:
        1. Meat
            1. Pork
    2. Ham Eggs
        1. Egg
2. Hamburger
    1. Meat
        1. Pork
    2. Bread
        1. Flour
        2. Water 
    3. Cheese
        1. Milk
3. English breakfast
    1. Fried eggs
        1. Egg
    2. Mushrooms
    3. Sausages
        1. Meat
            1. Pork
    4. Bread:
        1. Flour
        2. Water

User inputs: `“Eg”` / `“Egg”` / `“eg”` / `“egg”` or some other variant of the same word and 2 results are provided: Bacon & Eggs, English breakfast. When user clicks on one of the results, the item is shown highlighted in tree view.

####Bonus points:

Create an interface for adding new menu items and ingredients.
