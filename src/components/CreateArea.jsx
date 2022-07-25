import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const[isExpanded, setExpanded]=useState(false);
    const[newNote, setNewNote] = useState({
        title:"", 
        content:""});

    function handleChange(event){
        const{name, value} = event.target;
        setNewNote(prevValue=>{
            return{
                ...prevValue,
                [name] : value
        };
        });
    }
    function submitNote(event){
        event.preventDefault();
        props.onAdd(newNote);
        setNewNote({
            title: "",
            content : ""
        })
    }
    function expand(){
      setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (<input name="title" placeholder="Title" onChange ={handleChange} value={newNote.title}  />)}
        <textarea name="content" onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange ={handleChange} value={newNote.content}  />
        <Zoom in={isExpanded}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;