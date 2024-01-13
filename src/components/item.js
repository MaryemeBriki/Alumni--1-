import * as React from "react";
import { useMemo } from "react";
import * as styles from "./item.module.css";

const Item = ({
  searchResultText,
  showItem,
  itemTop,
  itemLeft,
  itemWidth,
  itemHeight,
  itemBorderRadius,
  itemBorder,
  itemBoxSizing,
  itemCursor,
  itemBackgroundColor,
  propFontSize,
  propTextAlign,
  propAlignItems,
  propJustifyContent,
  propColor,
  onItemContainer3Click,
}) => {
  const itemStyle = useMemo(() => {
    return {
      top: itemTop,
      left: itemLeft,
      width: itemWidth,
      height: itemHeight,
      borderRadius: itemBorderRadius,
      border: itemBorder,
      boxSizing: itemBoxSizing,
      cursor: itemCursor,
      backgroundColor: itemBackgroundColor,
    };
  }, [
    itemTop,
    itemLeft,
    itemWidth,
    itemHeight,
    itemBorderRadius,
    itemBorder,
    itemBoxSizing,
    itemCursor,
    itemBackgroundColor,
  ]);

  const item1Style = useMemo(() => {
    return {
      fontSize: propFontSize,
      textAlign: propTextAlign,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      color: propColor,
    };
  }, [
    propFontSize,
    propTextAlign,
    propAlignItems,
    propJustifyContent,
    propColor,
  ]);

  return (
    <div
      className={styles.item}
      style={itemStyle}
      onClick={onItemContainer3Click}
    >
      {showItem && (
        <div className={styles.item1} style={item1Style}>
          {searchResultText}
        </div>
      )}
    </div>
  );
};

export default Item;
