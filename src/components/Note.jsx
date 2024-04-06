import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick(){
    props.onDelete(props.id);
  }


  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} >
        <DeleteIcon />
        {/* npm install @mui/icons-material @mui/material @emotion/styled @emotion/react --legacy-peer-deps */}
      </button>
    </div>
  );
}

export default Note;
