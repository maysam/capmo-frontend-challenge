import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FormGroup,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

import {
  selectMenu,
  addNewMenu,
  addNewIngredient
} from "./actions/actionSlice";

const flattenMenu = menu => {
  const text = Object.keys(menu)[0];
  const menus = [text];

  const submenu = Object.values(menu)[0];
  if (submenu.length > 0) {
    const subs = submenu.flatMap(item => flattenMenu(item));
    subs.forEach(sub => {
      menus.push(text + " -> " + sub);
    });
  }
  return menus;
};

export const MenuEditor = () => {
  const menu = useSelector(selectMenu);
  const flattenedMenu = menu.flatMap(item => flattenMenu(item));

  const [newMenu, setNewMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(flattenedMenu[0]);
  const [newIngredient, setNewIngredient] = useState("");
  const dispatch = useDispatch();
  return (
    <div style={{ margin: 20 }}>
      <Typography variant="h3">Adding items or ingredients to the Menu</Typography>
      <FormGroup row style={{ padding: 20 }}>
        <TextField
          variant="outlined"
          value={newMenu}
          onChange={e => setNewMenu(e.target.value)}
          label="new menu item"
        />
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(addNewMenu(newMenu), setNewMenu(""));
          }}
        >
          Add new menu item
        </Button>
      </FormGroup>
      <FormGroup row style={{ padding: 20 }}>
        <Select
          autoWidth
          value={selectedMenu}
          onChange={e => setSelectedMenu(e.target.value)}
        >
          {flattenedMenu.map(menu => (
            <MenuItem key={menu} selected value={menu}>
              {menu}
            </MenuItem>
          ))}
        </Select>
        <TextField
          variant="outlined"
          label="ingridient"
          value={newIngredient}
          onChange={e => setNewIngredient(e.target.value)}
        />
        <Button
          variant="outlined"
          onClick={() => {
            dispatch(
              addNewIngredient({ newIngredient, selectedMenu }),
              setNewIngredient("")
            );
          }}
        >
          Add ingridient to menu item
        </Button>
      </FormGroup>
    </div>
  );
};
