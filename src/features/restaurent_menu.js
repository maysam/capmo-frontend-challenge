import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMenu } from "./counter/counterSlice";
import { Typography, TextField } from "@material-ui/core";
import { MenuItem } from "./menu_item";
export const RestaurentMenu = () => {
  const menu = useSelector(selectMenu);
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <Typography variant="h2">Restaurent Menu</Typography>
      <TextField
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        label="Keyword"
        variant="outlined"
      />
      {menu.map((item, index) => (
        <MenuItem key={"menu-item" + index} menu={item} selection={keyword} />
      ))}
    </div>
  );
};
