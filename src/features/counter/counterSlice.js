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
        Bread: [{ Flour: [], Water: [] }]
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
  name: "counter",
  initialState: {
    value: 12,
    menu: initialMenu
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export const selectMenu = state => state.counter.menu;

export default slice.reducer;
