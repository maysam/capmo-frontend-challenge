import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMenu } from "./counter/counterSlice";
import { TextField } from "@material-ui/core";
import { MenuItem } from "./menu_item";
export const RestaurentMenu = () => {
  const menu = useSelector(selectMenu);
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <TextField
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        label="Keyword"
        variant="outlined"
      />
      <MenuItem key="menu-item" menu={menu} selection={keyword} />
    </div>
  );
};
