import React from "react";
import close_img from "../../images/close.png";
import "./styles.css";

const Delete = (props) => {
  const {index, onDelete, setShowDelete} = props
  
  const handleDelete = (e) => {
    onDelete(index)
  };

  return (
    <div className="overlay_container">
      <div className="img_container" onClick={() => setShowDelete(false)}>
        <img src={close_img} alt="close_btn" />
      </div>
      <div className="content">
        <p className="heading">Delete</p>
        <p>Are you sure?</p>
        <div className="confirm-box">
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowDelete(false)}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
