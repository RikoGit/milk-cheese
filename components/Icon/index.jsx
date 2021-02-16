import React from "react";
import cn from "classnames";

import styles from "./styles.scss";

const Icon = ({ icon = "add", type, active, size = 20 }) => (
  <div
    className={cn(
      styles.root,
      styles[`root_icon_${icon}`],
      styles[`root_type_${type}`],
      active && styles.root_active
    )}
    style={{ width: size, height: size }}
  />
);

export default Icon;
