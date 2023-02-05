import React from "react";
import Header from "./Header"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note = (props) => {

    const deleteNote = () =>{
        props.deleteItem(props.id);
        console.log("deleted")
    }
    return (
      <>
        <div className="notess">
            <div className="note">
                <h1>{props.title}</h1>
                <br/>
                <p>{props.content}</p>
                <button className="btn" onClick={deleteNote}>
                    <DeleteOutlineIcon className="deleteIcon"/>
                </button>
            </div>
        </div>
      </>
    );
}

export default Note;
