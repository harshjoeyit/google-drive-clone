import React, {useRef, useState} from "react";
import Rename from "../Overlay/Rename";
import DeleteModal from '../Overlay/Delete';
import ContextMenu from '../Options/Options';
import folder_img from "../../images/folder.png";
import "./styles.css";

export default function Folder(props) {
  const { name, index, onRename, onDelete, onOpen } = props;
  const containerRef = useRef(null);
  const [showRename, setShowRename] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className="object_container" ref={containerRef} onDoubleClick={() => onOpen(index)}>
      <div className="folder_img_container">
        <img src={folder_img} alt="folder_icon" />
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
