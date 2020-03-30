import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  FormGroup,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

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

export const MenuEditor = ({ menu, dispatch }) => {
  const flattenedMenu = menu.flatMap(item => flattenMenu(item));

  const [newMenu, setNewMenu] = useState("");
  const [selectedMenu, setSelectedMenu] = useState(flattenedMenu[0]);
  const [newIngredient, setNewIngredient] = useState("");

  return (
    <div style={{ margin: 50, border: "thin solid", padding: 10 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Adding items or ingredients to the Menu
          </Typography>
        </Toolbar>
      </AppBar>
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
            dispatch({ type: "addNewMenu", payload: newMenu });
            setNewMenu("");
          }}
        >
          Add new menu item
        </Button>
      </FormGroup>
      <FormGroup row style={{ padding: 20 }}>
        <Select
          autoWidth
          value={selectedMenu}
          variant="outlined"
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
            dispatch({
              type: "addNewIngredient",
              payload: { newIngredient, selectedMenu }
            });
            setNewIngredient("");
          }}
        >
          Add ingridient to menu item
        </Button>
      </FormGroup>
    </div>
  );
};
