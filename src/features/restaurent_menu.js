import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMenu } from "./counter/counterSlice";

import { MenuItem } from "./menu_item";
export const RestaurentMenu = () => {
  const menu = useSelector(selectMenu);

  return <MenuItem key='menu-item' menu={menu} depth={3} />;
};
