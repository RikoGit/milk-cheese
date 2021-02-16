import React from "react";
import cn from "classnames";

import styles from "./styles.scss";

const Icon = ({ icon = "add", type, active, size = 20 }) => {
  const activeStyles = active ? styles.root_active : "";
  const typeStyles = type ? styles[`root_type_${type}`] : "";

  return (
    <div
      className={cn(
        styles.root,
        styles[`root_icon_${icon}`],
        typeStyles,
        activeStyles
      )}
      style={{ width: size, height: size }}
    />
  );
};

export default Icon;
