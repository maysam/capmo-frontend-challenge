import React, { useState } from "react";
import { Typography } from "@material-ui/core";

const Text = ({ text = "provide text", depth = 1, selection }) => (
  <Typography variant={"h" + Math.min(6, depth + 3)}>
    {depth > 1 && "└"}
    {depth > 1 && selection ? (
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(
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

const menuHasSelection = (menu, depth, selection) => {
  if (selection === "") {
    return true;
  }

  const [text, submenu] = menu;
  if (depth > 1 && text.match(new RegExp(selection, "gi"))) {
    return true;
  }

  const mappings = Object.entries(submenu).map(item =>
    menuHasSelection(item, depth + 1, selection)
  );
  return mappings.includes(true);
};

export const MenuItem = ({ menu = {}, depth = 1, selection = "" }) => {
  const [showDetails, show] = useState(false);
  if (depth === 1 && !menuHasSelection(menu, depth, selection)) return null;

  const [text, submenu] = menu;
  const submenuHtml =
    (showDetails || depth > 1) &&
    Object.entries(submenu).map((subitem, index) => (
      <MenuItem
        key={"sub-item-" + index}
        menu={subitem}
        depth={depth + 1}
        selection={selection}
      />
    ));

  return (
    <div
      style={{
        border: "none thin gray",
        paddingLeft: depth * 20
      }}
      onClick={() => show(!showDetails)}
    >
      <Text text={text} depth={depth} selection={selection} />
      {submenuHtml}
    </div>
  );
};
