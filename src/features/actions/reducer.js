const initialMenu = [
  {
    "Bacon & eggs": [
      {
        Bacon: [{ Meat: [{ Pork: [] }] }]
      },
      {
        "Ham Eggs": [{ Egg: [] }]
      }
    ]
  },
  {
    Hamburger: [
      {
        Meat: [{ Pork: [] }]
      },
      {
        Bread: [{ Flour: [] }, { Water: [] }]
      },
      {
        Cheese: [{ Milk: [] }]
      }
    ]
  },
  {
    "English breakfast": [
      {
        "Fried eggs": [{ Egg: [] }]
      },
      {
        Mushrooms: []
      },
      {
        Sausages: [{ Meat: [{ Pork: [] }] }]
      },
      {
        Bread: [{ Flour: [] }, { Water: [] }]
      }
    ]
  }
];
export const initialState = { menu: initialMenu };

export function reducer(state, action) {
  const oldMenu = state.menu;
  const newMenu = {};
  switch (action.type) {
    case "addNewMenu":
      if (!action.payload) {
        return state;
      }
      newMenu[action.payload] = [];
      oldMenu.push(newMenu);
      return { menu: oldMenu };
    case "addNewIngredient":
      const { selectedMenu, newIngredient } = action.payload;
      if (!newIngredient) {
        return state;
      }

      const parts = selectedMenu.split(" -> ");
      let menu = state.menu;

      parts.forEach(element => {
        for (let index = 0; index < Object.values(menu).length; index++) {
          const item = Object.values(menu)[index];
          const key = Object.keys(item)[0];
          if (key === element) {
            menu = item[key];
            break;
          }
        }
      });

      newMenu[newIngredient] = [];
      menu.push(newMenu);
      return { menu: oldMenu };
    default:
      throw new Error();
  }
}
