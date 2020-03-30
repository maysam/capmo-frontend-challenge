import React, { useState, useReducer } from "react";
import {
  AppBar,
  Toolbar,
  FormControlLabel,
  Typography,
  TextField,
  Switch
} from "@material-ui/core";

import { reducer, initialState } from "./actions/reducer";
import { MenuItem } from "./menu_item";
import { MenuEditor } from "./menu_editor";

export const RestaurentMenu = () => {
  const [keyword, setKeyword] = useState("");
  const [editable, toggleEditable] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const menu = state.menu;

  return (
    <div>
      <AppBar position="static" style={{ marginBottom: 10 }}>
        <Toolbar>
          <Typography variant="h3">Restaurent Menu</Typography>
        </Toolbar>
      </AppBar>
      <FormControlLabel
        control={
          <Switch
            checked={editable}
            onChange={e => toggleEditable(!editable)}
          />
        }
        label="Allow adding to Menu"
      />
      <TextField
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        label="Search for allergen"
        variant="outlined"
      />
      <div style={{ margin: 15, border: "thin solid navy" }}>
        <div style={{ margin: 5, padding: 10, border: "thin solid navy" }}>
          {menu.map((item, index) => (
            <MenuItem
              key={"menu-item" + index}
              menu={item}
              selection={keyword}
            />
          ))}
        </div>
      </div>
      {editable && <MenuEditor menu={menu} dispatch={dispatch} />}
    </div>
  );
};
