import * as React from "react";
import { useMemo } from "react";
import * as styles from "./linkedin-icon.module.css";

const LinkedinIcon = ({
  dimensions,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
}) => {
  const linkedinIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <img
      className={styles.linkedinIcon}
      alt=""
      src={dimensions}
      style={linkedinIconStyle}
    />
  );
};

export default LinkedinIcon;
