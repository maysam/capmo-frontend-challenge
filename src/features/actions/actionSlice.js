import { createSlice } from "@reduxjs/toolkit";

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

export const slice = createSlice({
  name: "restaurent",
  initialState: {
    menu: initialMenu
  },
  reducers: {
    addNewMenu: (state, action) => {
      if (!action.payload) {
        return;
      }
      const newMenu = {};
      newMenu[action.payload] = [];
      state.menu.push(newMenu);
    },
    addNewIngredient: (state, action) => {
      const { selectedMenu, newIngredient } = action.payload;
      if (!newIngredient) {
        return;
      }
      const newMenu = {};
      newMenu[newIngredient] = [];

      const parts = selectedMenu.split(" -> ");
      let menu = state.menu;

      parts.forEach(element => {
        Object.values(menu).forEach((item, index) => {
          const key = Object.keys(item)[0];
          if (key === element) {
            menu = Object.values(menu)[index][key];
          }
        });
      });

      menu.push(newMenu);
    }
  }
});

export const { addNewMenu, addNewIngredient } = slice.actions;

export const selectMenu = state => state.restaurent.menu;

export default slice.reducer;
