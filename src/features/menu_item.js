import React from "react";
import { Typography } from "@material-ui/core";

const Text = ({ text = "provide text", depth = 1, selection }) => (
  <Typography variant={"h" + (depth + 1)}>
    {selection ? (
      <div
        dangerouslySetInnerHTML={{
          __html: (depth > 1 ? "└" + text : text).replace(
            new RegExp(selection, "gi"),
            match => `<mark>${match}</mark>`
          )
        }}
      />
    ) : (
      text
    )}
  </Typography>
);

const menuHasSelection = (menu, selection) => {
  if (selection === "") {
    return true;
  }
  const text = Object.keys(menu)[0];
  if (text.match(new RegExp(selection, "gi"))) {
    return true;
  }
  const submenu = Object.values(menu)[0];
  const mappings = submenu.map(item => menuHasSelection(item, selection));
  return mappings.includes(true);
};

export const MenuItem = ({ menu = [], depth = 1, selection = "" }) =>
  menu.map((item, index) => {
    if (!menuHasSelection(item, selection)) return null;
    const text = Object.keys(item)[0];
    const submenu = Object.values(item)[0];

    const submenuHtml = (
      <MenuItem menu={submenu} depth={depth + 1} selection={selection} />
    );
    return (
      <div
        style={{
          border: "none thin gray",
          paddingLeft: depth * 20
        }}
        key={"menu-item-" + index}
      >
        <Text text={text} depth={depth} selection={selection} />
        {submenuHtml}
      </div>
    );
  });
