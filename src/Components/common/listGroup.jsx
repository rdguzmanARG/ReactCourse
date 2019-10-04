import React from "react";

const ListGroup = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onChange,
    currentSelection
  } = props;

  return (
    <ul className="list-group">
      <li
        onClick={() => onChange(null)}
        className={
          currentSelection == null
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        All
      </li>
      {items.map(item => (
        <li
          key={item[valueProperty]}
          onClick={() => onChange(item[valueProperty])}
          className={
            currentSelection == item[valueProperty]
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
