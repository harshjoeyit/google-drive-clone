import React, {useState} from "react";
import close_img from "../../images/close.png";
import "./styles.css";

export default function Rename(props) {
  const [name, setName] = useState(props.name);
  const { onRename, error, index, setShowRename } = props;

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="overlay_container">
      <div className="img_container" onClick={() => setShowRename(false)}>
        <img src={close_img} alt="close_btn" />
      </div>
      <div className="content">
        <p className="heading">Rename</p>
        <input type="text error_input" onChange={handleChange} value={name} />
        <p className="error_msg">{error}</p>
        <button
          onClick={() => {
            onRename(name, index);
            setShowRename(false);
          }}
        >
          Rename
        </button>
      </div>
    </div>
  );
}
