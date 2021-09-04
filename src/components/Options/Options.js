import React, { useEffect, useState } from "react";
import "./styles.css";

export default function Options(props) {
  const { parentRef } = props;
  const [isVisible, setVisiblity] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const { setShowRename, setShowDelete } = props;

  useEffect(() => {
    const parent = parentRef.current;
    // console.log("PARENT", parent)

    if (!parent) {
      return;
    }
    const showMenu = (e) => {
      e.preventDefault();
      //   console.log("show menu");
      setVisiblity(true);
      setX(e.clientX);
      setY(e.clientY);
    };

    const closeMenu = (e) => {
      console.log("close menu");
      setVisiblity(false);
    };

    parent.addEventListener("contextmenu", showMenu);
    window.addEventListener("click", closeMenu);
    return function cleanUp() {
      parent.removeEventListener("contextmenu", showMenu);
      window.removeEventListener("click", closeMenu);
    };
  });

  const style = {
    top: y,
    left: x,
  };

  return isVisible ? (
    <div
      className="options_container"
      style={style}
    >
      <p
        onClick={() => {
          setShowRename(true);
          setShowDelete(false);
        }}
      >
        Rename
      </p>
      <p
        className="delete"
        onClick={() => {
          setShowRename(false);
          setShowDelete(true);
        }}
      >
        Delete
      </p>
    </div>
  ) : null;
}
