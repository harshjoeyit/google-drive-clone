import React, {useRef, useState} from "react";
import file_img from "../../images/file.png";
import Rename from "../Overlay/Rename";
import DeleteModal from '../Overlay/Delete';
import ContextMenu from '../Options/Options';
import "./styles.css";

export default function File(props) {
  const { name, index, error, onRename, onDelete } = props;
  const containerRef = useRef(null);
  const [showRename, setShowRename] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="object_container" ref={containerRef}>
      <div className="file_img_container">
        <img src={file_img} alt="file_icon" />
        <p className="tag">{`.${name.split(".")[1]}`}</p>
      </div>
      <p className="object_name">{name}</p>
      <ContextMenu
        parentRef={containerRef}
        setShowRename={setShowRename}
        setShowDelete={setShowDelete}
      />
      {showRename && (
        <Rename
          name={name}
          onRename={onRename}
          index={index}
          error={error}
          setShowRename={setShowRename}
        />
      )}
      {showDelete && (
        <DeleteModal
          onDelete={onDelete}
          index={index}
          setShowDelete={setShowDelete}
        />
      )}
    </div>
  );
}
