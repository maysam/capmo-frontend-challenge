import React, { useState } from "react";
import { Typography } from "@material-ui/core";

const Text = ({ text, depth }) => (
  <Typography variant={"h" + depth} component={"h" + depth}>
    {text}
  </Typography>
);

export const MenuItem = ({ menu, depth }) =>
  menu.map((item, index) => (
    <div
      style={{
        border: "solid thin gray",
        paddingLeft: depth * 10,
        margin: 10
      }}
      key={"menu-item-" + index}
    >
      <Text text={Object.keys(item)[0]} depth={depth} />
      <MenuItem menu={Object.values(item)[0]} depth={depth + 1} />
    </div>
  ));
