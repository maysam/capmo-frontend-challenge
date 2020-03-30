import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectMenu } from "./actions/actionSlice";
import {
  FormControlLabel,
  Typography,
  TextField,
  Switch
} from "@material-ui/core";
import { MenuItem } from "./menu_item";
import { MenuEditor } from "./menu_editor";
export const RestaurentMenu = () => {
  const menu = useSelector(selectMenu);
  const [keyword, setKeyword] = useState("");
  const [editable, toggleEditable] = useState(false);

  return (
    <div>
      <Typography variant="h2">Restaurent Menu</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={editable}
            onChange={e => toggleEditable(!editable)}
          />
        }
        label="Editable Menu"
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
      {editable && <MenuEditor />}
    </div>
  );
};
