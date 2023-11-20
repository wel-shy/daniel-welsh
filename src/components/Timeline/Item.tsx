import React from "react";
import { Role } from "./types";

const Item = ({ role }: { role: Role }) => (
  <div
    key={role.company}
    style={{
      backgroundColor: "red",
      height: 10,
      flexBasis: `${role.percent}%`,
      width: "100%",
    }}
  >
    {role.company}
  </div>
);

export default Item;
