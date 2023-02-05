import React, { useState } from "react";
import "./Header.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const CreateNote = (props) => {

    const [note, setNote] = useState({
        title:'',
        content:''

    });

    const InputEvent = (event) =>{
        const value= event.target.value;
        const name = event.target.name;
        setNote((prevData) =>{
            return{
                ...prevData,
                [name]: value,
            };
        });
    };

    const addElement = () =>{
        props.passNote(note);
        setNote({title: "",
        content: ""});
    }

    return (
      <>
        <div className="main_note">
            <form className="form">
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" />
                <textarea name="content" id="" cols="" rows="" value={note.content} onChange={InputEvent}  placeholder="Write a note"></textarea>
                <Button onClick={addElement}>
                    <AddIcon className="plus_sign"/>
                </Button>
            </form>
        </div>
      </>
    );
}

export default CreateNote;
