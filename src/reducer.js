const initialMenu = {
  "Bacon & eggs": {
    Bacon: { Meat: { Pork: {} } },
    "Ham Eggs": { Egg: {} }
  },

  Hamburger: {
    Meat: { Pork: {} },
    Bread: { Flour: {}, Water: {} },
    Cheese: { Milk: {} }
  },

  "English breakfast": {
    "Fried eggs": { Egg: {} },
    Mushrooms: {},
    Sausages: { Meat: { Pork: {} } },
    Bread: { Flour: {}, Water: {} }
  }
};

export const initialState = { menu: initialMenu };

export function reducer(state, action) {
  const oldMenu = state.menu;
  switch (action.type) {
    case "addNewMenu":
      if (!action.payload) {
        return state;
      }
      oldMenu[action.payload] = {};
      return { menu: oldMenu };
    case "addNewIngredient":
      const { selectedMenu, newIngredient } = action.payload;
      if (!newIngredient) {
        return state;
      }

      const parts = selectedMenu.split(" -> ");
      let menu = oldMenu;

      parts.forEach(element => {
        for (let index = 0; index < Object.entries(menu).length; index++) {
          const item = Object.entries(menu)[index];
          const [key, sub] = item;
          console.log(key, sub);
          if (key === element) {
            menu = sub;
            break;
          }
        }
      });

      menu[newIngredient] = {};

      return { menu: oldMenu };
    default:
      throw new Error();
  }
}
